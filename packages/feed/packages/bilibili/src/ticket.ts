import crypto from "node:crypto";
import type { HTTP, Logger } from "koishi";
import { BiliTicketSchema } from "./type";

const hmacSha256 = (key: string, message: string) =>
  crypto.createHmac("sha256", key).update(message).digest("hex");

const getName = (url: string) => url.split("/").pop()?.split(".")[0] ?? "";

const getBiliTicket = (
  csrf: string = "",
  ctx: { http: HTTP; logger: Logger }
) => {
  const ts = Math.floor(Date.now() / 1000);
  const hexSign = hmacSha256("XgwSnGZ1p", `ts${ts}`);
  const params = new URLSearchParams({
    key_id: "ec02",
    hexsign: hexSign,
    "context[ts]": ts.toString(),
    csrf,
  });

  const url =
    "https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket";

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0",
  };

  return ctx.http.post(url, params, { headers }).then((resp) => {
    const result = BiliTicketSchema(resp.data);
    if (result instanceof TypeError) {
      ctx.logger.error("BiliTicketSchema 返回 TypeError: " + resp.data);
      return undefined;
    }
    return result;
  });
};

export const refreshWbiSign = async (
  csrf: string,
  ctx: { logger: Logger; http: HTTP }
): Promise<{ img: string; sub: string } | undefined> => {
  const ticket = await getBiliTicket(csrf, ctx);
  if (!ticket) {
    ctx.logger.error("ticket is not found");
    return;
  }

  if (ticket.code !== 0) {
    ctx.logger.error("ticket code is not 0, msg: " + ticket.message);
    return;
  }

  const nav = ticket.data.nav;

  const img = getName(nav.img);
  const sub = getName(nav.sub);

  return { img, sub };
};
