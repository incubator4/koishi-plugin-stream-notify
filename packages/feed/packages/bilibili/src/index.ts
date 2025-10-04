import { type Context, Command } from "koishi";
import {
  type MessageListener,
  startListen,
  type MsgHandler,
} from "blive-message-listener";

export interface Config {
  cmd: Command;
}

export const name = "stream-notify-feed-bilibili";

export const apply = (ctx: Context, config: Config) => {
  const listener: Record<string, MessageListener> = {};
  const logger = ctx.logger(name);

  ctx.on("ready", () => {
    logger.info("Bilibili feed ready");
  });

  ctx.on("dispose", () => {
    // close all listener
    Object.values(listener).forEach((listener) => {
      listener.close();
    });
  });
};

export default {
  name,
  apply,
};
