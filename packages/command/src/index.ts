import { type Context, Command } from "koishi";
import { TABLE_STREAM_NOTIFY_NOTIFICATIONS } from "@koishi-plugin-stream-notify/constrant";

export interface Config {
  cmd: Command;
}

export const name = "command";

export const apply = (ctx: Context, config: Config) => {
  config.cmd.subcommand(".platform").action(({ session }) => {
    return session?.platform;
  });

  config.cmd.subcommand(".channel").action(({ session }) => {
    let channel = session.event.channel;
    console.log(channel);
    session.bot.sendMessage(
      channel.id,
      '<image url="https://koishi.chat/logo.png"/>'
    );
    return JSON.stringify(channel, null, 2);
  });

  config.cmd.subcommand(".add <platform>").action(({ session }, platform) => {
    ctx.database.create(TABLE_STREAM_NOTIFY_NOTIFICATIONS, { platform });
    ctx.database.createFeed();
    session.send(`添加平台 ${platform}`);
  });

  config.cmd.subcommand(".live-start").action(() => {
    ctx.emit("stream-notify/live-start", {
      title: "测试",
      user_id: "123",
      room_id: "123",
      session_id: "123",
      url: "https://www.baidu.com",
    });
  });
};

export default {
  name,
  apply,
};
