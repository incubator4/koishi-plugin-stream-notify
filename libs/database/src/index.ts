import type { Context } from "koishi";

export const STREAM_NOTIFY_NOTIFICATIONS = "stream-notify.notifications";
export const STREAM_NOTIFY_FEEDS = "stream-notify.feeds";
export const STREAM_NOTIFY_SUBSCRIPTION = "stream-notify.subscription";

declare module "koishi" {
  interface Tables {
    "stream-notify.notifications": Notification;
    // "stream-notify.sources": Source;
    "stream-notify.feeds": {};
    "stream-notify.subscription": Subscription;
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

export const name = "Database";

export const apply = (ctx: Context) => {
  ctx.model.extend(
    STREAM_NOTIFY_NOTIFICATIONS,
    {
      id: "integer",
      platform: "string",
    },
    {
      primary: "id",
      autoInc: true,
    }
  );
};

export default {
  name,
  apply,
};
