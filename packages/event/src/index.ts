import type { Context } from "koishi";

declare module "koishi" {
  interface Events {
    // Live start
    "stream-notify/live-start"(event: LiveStartEvent): void;

    // Live end
    "stream-notify/live-end"(): void;

    // Dynamic
    "stream-notify/dynamic"(): void;
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
