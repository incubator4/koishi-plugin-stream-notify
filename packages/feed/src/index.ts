import { type Context, Command } from "koishi";
import Bilibili from "@koishi-plugin-stream-notify/feed-bilibili";

export interface Config {
  cmd: Command;
}

export const name = "stream-notify-feed";

export const apply = (ctx: Context, config: Config) => {
  ctx.plugin(Bilibili, config);

  ctx.on("ready", () => {
    ctx.logger(name).debug("Feed ready");
  });
};

export default {
  name,
  apply,
};
