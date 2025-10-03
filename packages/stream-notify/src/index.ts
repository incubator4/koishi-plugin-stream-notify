import { type Context, Schema } from "koishi";
import Database from "@koishi-plugin-stream-notify/database";
import Cmd from "@koishi-plugin-stream-notify/command";

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

  ctx.on("stream-notify/live-start", (event) => {
    console.log("stream-notify/live-start");
    console.log(event);
  });

  ctx.on("message", (session) => {
    if (session.content === "123") {
      session.send("456");
    }
  });
};
