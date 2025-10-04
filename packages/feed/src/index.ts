import { type Context, Command } from "koishi";
import Bilibili from "@koishi-plugin-stream-notify/feed-bilibili";

export interface Config {
  cmd: Command;
}

export const name = "feed";

export const apply = (ctx: Context, config: Config) => {
  ctx.plugin(Bilibili, config);
};

export default {
  name,
  apply,
};
