import { type Context } from "koishi";
import { CookieJar, Cookie } from "tough-cookie";

declare module "koishi" {
  interface Context {
    STREAM_NOTIFY_FEED_BILIBILI_JAR: Jar;
  }
}

export interface Jar {
  cookies: () => string;
  csrf: () => string | undefined;
}

export const name = "stream-notify-feed-bilibili-jar";

export const apply = (ctx: Context) => {
  const jar = new CookieJar();

  ctx.STREAM_NOTIFY_FEED_BILIBILI_JAR = {
    cookies: () =>
      jar
        .serializeSync()
        .cookies.map((c) => `${c.key}=${c.value}`)
        .join("; "),
    csrf: () =>
      jar.serializeSync().cookies.find((c) => c.key === "bili_jct")?.value,
  };

  // config.cmd.subcommand(".cookies").action(() => {
  //   if (!ctx.STREAM_NOTIFY_FEED_BILIBILI_JAR) {
  //     return "jar not found";
  //   }
  //   return ctx.STREAM_NOTIFY_FEED_BILIBILI_JAR.cookies();
  // });
};

export default {
  name,
  apply,
};
