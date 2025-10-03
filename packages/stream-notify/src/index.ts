import { type Context, Schema } from "koishi";
import { Database } from "core";

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
  ctx.plugin(Database, {
    cmd: "sns",
  });

  ctx.on("stream-notify/live-start", (event) => {
    console.log("stream-notify/live-start");
    console.log(event);
  });

  ctx.on("message", (session) => {
    if (session.content === "123") {
      session.send("456");
    }
  });

  ctx.command("config").action(() => {
    return JSON.stringify(config);
  });

  ctx.command("platform").action(({ session }) => {
    return session?.platform;
  });

  ctx.command("channel").action(({ session }) => {
    let channel = session.event.channel;
    console.log(channel);
    session.bot.sendMessage(
      channel.id,
      '<image url="https://koishi.chat/logo.png"/>'
    );
    return JSON.stringify(channel, null, 2);
  });

  ctx.command("add <platform>").action(({ session }, platform) => {
    ctx.database.create("stream-notify.notifications", { platform });
    ctx.database.createFeed();
    session.send(`添加平台 ${platform}`);
  });

  ctx.command("live-start").action(() => {
    ctx.emit("stream-notify/live-start", {
      title: "测试",
      user_id: "123",
      room_id: "123",
      session_id: "123",
      url: "https://www.baidu.com",
    });
  });
};
