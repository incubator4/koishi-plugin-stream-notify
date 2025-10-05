import type { Command, Context } from "koishi";
import {
  TABLE_STREAM_NOTIFY_NOTIFICATIONS,
  TABLE_STREAM_NOTIFY_FEEDS,
  TABLE_STREAM_NOTIFY_SUBSCRIPTION,
} from "@koishi-plugin-stream-notify/constrant";

declare module "koishi" {
  interface Tables {
    [TABLE_STREAM_NOTIFY_NOTIFICATIONS]: Notification;
    // "stream-notify.sources": Source;
    [TABLE_STREAM_NOTIFY_FEEDS]: {};
    [TABLE_STREAM_NOTIFY_SUBSCRIPTION]: Subscription;
  }

  interface Database {
    createFeed(): void;
  }
}

export interface Notification {
  id: number;
  platform: string;
  channel: string;
  at_all: boolean;
  source: number;
}

export interface Feed {
  id: number;
  room_id: string;
}

export interface Subscription {
  channel_id: string;
  feed_id: string;
}

export const name = "stream-notify-database";

export interface Config {
  cmd: Command;
}

export const apply = (ctx: Context, config: Config) => {
  ctx.model.extend(
    TABLE_STREAM_NOTIFY_NOTIFICATIONS,
    {
      id: "integer",
      platform: "string",
    },
    {
      primary: "id",
      autoInc: true,
    }
  );

  // 实现 createFeed 方法
  ctx.database.createFeed = () => {
    ctx.database.create(TABLE_STREAM_NOTIFY_FEEDS, {});
  };

  const streamNotifyCmd = config.cmd;

  streamNotifyCmd.subcommand(".db", "数据库管理").action(() => {
    return "数据库管理";
  });
};

export default {
  name,
  apply,
};
