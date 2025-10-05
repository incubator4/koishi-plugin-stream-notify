import { type Awaitable, type Context, HTTP, Schema, Service } from "koishi";
import {} from "koishi-plugin-cron";
import { refreshWbiSign } from "../ticket";
import { name as jarName } from "../jar";

declare module "koishi" {
  interface Context {}
}

export const getMe = async (http: HTTP) => {
  return http
    .get("https://api.bilibili.com/x/member/web/account")
    .then((resp) => resp.data);
};

export const name = "stream-notify-feed-bilibili-api";

export const inject = ["http", jarName];

export const apply = (ctx: Context) => {
  const logger = ctx.logger(name);

  const updateBiliTicket = async () => {
    const _csrf = ctx.STREAM_NOTIFY_FEED_BILIBILI_JAR.csrf();
    if (!_csrf) {
      logger.error("csrf is not found");
      return;
    }
    const sign = await refreshWbiSign(_csrf, { logger, http: ctx.http });
    if (sign) wbiSign = sign;
  };

  const cannel = ctx.cron("*/1 * * * *", async () => {
    console.log("updateBiliTicket");
    // await updateBiliTicket();
  });

  let wbiSign: { img: string; sub: string } | undefined = undefined;

  ctx.on("ready", async () => {
    await updateBiliTicket();
  });

  ctx.on("dispose", () => {
    cannel();
  });
};

export default {
  name,
  inject,
  apply,
};
