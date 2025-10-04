import { type Awaitable, type Context, Schema, Service } from "koishi";
import { CookieJar, Cookie } from "tough-cookie";
import { CronJob } from "cron";
import { refreshWbiSign } from "./ticket";

declare module "koishi" {
  interface Context {
    "bilibili-notify-api": {};
  }
}

export const name = "stream-notify-feed-bilibili-api";

export const apply = (ctx: Context) => {
  const logger = ctx.logger(name);

  let jar: CookieJar | undefined = undefined;
  let cronJob: CronJob | undefined = undefined;
  let wbiSign: { img: string; sub: string } | undefined = undefined;

  const csrf = () =>
    jar?.serializeSync().cookies.find((cookie) => cookie.key === "bili_jct")
      ?.value;

  const updateBiliTicket = async () => {
    const _csrf = csrf();
    if (!_csrf) {
      logger.error("csrf is not found");
      return;
    }
    const sign = await refreshWbiSign(_csrf, { logger, http: ctx.http });
    if (sign) wbiSign = sign;
  };

  ctx.on("ready", async () => {
    jar = new CookieJar();

    cronJob = new CronJob("0 0 * * *", async () => {
      await updateBiliTicket();
    });
    cronJob.start();

    await updateBiliTicket();
  });

  ctx.on("dispose", () => {
    cronJob?.stop();
  });
};
