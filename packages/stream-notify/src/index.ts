import { type Context, Schema } from "koishi";
import Database from "@koishi-plugin-stream-notify/database";
import Cmd from "@koishi-plugin-stream-notify/command";
import Feed from "@koishi-plugin-stream-notify/feed";
import {} from "@koishi-plugin-stream-notify/event";
import { EVENT_STREAM_NOTIFY_LIVE_START } from "@koishi-plugin-stream-notify/constrant";

export const name = "stream-notify";

export const inject = ["database"];

export const usage = `
# 直播通知

## 功能
- 直播开始通知
- 直播结束通知
`;

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export const apply = (ctx: Context, config: Config) => {
  // ctx.i18n.define('en-US', require('./locales/en-US'))
  // ctx.i18n.define("zh-CN", require("./locales/zh-CN"))
  let cmd = ctx.command("sn");

  ctx.plugin(Database, { cmd });
  ctx.plugin(Cmd, { cmd });
  ctx.plugin(Feed, { cmd });

  ctx.on(EVENT_STREAM_NOTIFY_LIVE_START, (event) => {
    console.log("stream-notify/live-start");
    console.log(event);
  });

  ctx.on("message", (session) => {
    if (session.content === "123") {
      session.send("456");
    }
  });
};
