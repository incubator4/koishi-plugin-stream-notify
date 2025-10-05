import { type Context, Schema } from "koishi";
import Database from "@stream-notify/database";
import Cmd from "@stream-notify/command";
import {} from "@stream-notify/event";
import {} from "@koishijs/plugin-server";
import {
  EVENT_STREAM_NOTIFY_LIVE_START,
  EVENT_STREAM_NOTIFY_LIVE_END,
  EVENT_STREAM_NOTIFY_DYNAMIC,
} from "@stream-notify/constrant";

export const name = "stream-notify";

export const inject = {
  required: ["database", "cron"],
  optional: ["server"],
};

export const usage = `
# 直播通知

## 功能
- 直播开始通知
- 直播结束通知
- 动态通知
`;

export interface Config {
  prefix: string;
}

export const Config: Schema<Config> = Schema.object({
  prefix: Schema.string().default("sn"),
}).i18n({
  "zh-CN": require("locales/zh-CN/config"),
  "en-US": require("locales/en-US/config"),
});

export const apply = (ctx: Context, config: Config) => {
  // ctx.i18n.define('en-US', require('./locales/en-US'))
  // ctx.i18n.define("zh-CN", require("./locales/zh-CN"))
  const logger = ctx.logger(name);

  let cmd = ctx.command(config.prefix);

  let _config = {
    cmd,
  };

  ctx.plugin(Database, _config);
  ctx.plugin(Cmd, _config);

  ctx.on(EVENT_STREAM_NOTIFY_LIVE_START, (event) => {
    logger.info(`receive ${EVENT_STREAM_NOTIFY_LIVE_START} event: `, event);
  });

  ctx.on(EVENT_STREAM_NOTIFY_LIVE_END, () => {
    logger.info(`receive ${EVENT_STREAM_NOTIFY_LIVE_END} event: `, event);
  });

  ctx.on(EVENT_STREAM_NOTIFY_DYNAMIC, () => {
    logger.info(`receive ${EVENT_STREAM_NOTIFY_DYNAMIC} event: `, event);
  });
};
