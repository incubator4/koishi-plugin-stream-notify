import { type Context, type Schema } from "koishi";
import { Database } from "@koishi-plugin-stream-notify/lib";

export const name = "stream-notify";

export const inject = ["database"];

export interface Config {}

export const apply = (ctx: Context, config: Config) => {
  ctx.plugin(Database);

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
