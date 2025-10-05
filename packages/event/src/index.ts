import type { Context } from "koishi";
import {
  EVENT_STREAM_NOTIFY_LIVE_START,
  EVENT_STREAM_NOTIFY_LIVE_END,
  EVENT_STREAM_NOTIFY_DYNAMIC,
} from "@stream-notify/constrant";

declare module "koishi" {
  interface Events {
    // Live start
    [EVENT_STREAM_NOTIFY_LIVE_START](event: LiveStartEvent): void;

    // Live end
    [EVENT_STREAM_NOTIFY_LIVE_END](): void;

    // Dynamic
    [EVENT_STREAM_NOTIFY_DYNAMIC](): void;
  }
}

export interface LiveStartEvent {
  title: string;
  user_id: string;
  room_id: string;
  session_id: string;
  url: string;
}

export interface LiveEndEvent {
  session_id: string;
}

export interface DynamicEvent {}

export default {};
