import { type Context, Command } from "koishi";
import {
  type MessageListener,
  startListen,
  type MsgHandler,
} from "blive-message-listener";
import Api from "./api";
import Jar from "./jar";
export interface Config {
  cmd: Command;
}

export const name = "stream-notify-feed-bilibili";

export const apply = (ctx: Context, config: Config) => {
  const listener: Record<string, MessageListener> = {};
  const logger = ctx.logger(name);

  ctx.plugin(Jar);
  ctx.plugin(Api);

  ctx.on("ready", () => {
    logger.info("Bilibili feed ready");
  });

  ctx.on("dispose", () => {
    // close all listener
    Object.values(listener).forEach((listener) => {
      listener.close();
      delete listener[listener.roomId];
    });
  });
};

export default {
  name,
  apply,
};
