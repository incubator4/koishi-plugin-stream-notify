import { type Context, Command } from "koishi";
import {
  type MessageListener,
  startListen,
  type MsgHandler,
} from "blive-message-listener";

export interface Config {
  cmd: Command;
}

export const name = "bilibili";

export const apply = (ctx: Context, config: Config) => {
  const listener: Record<string, MessageListener> = {};

  ctx.on("ready", () => {});

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
