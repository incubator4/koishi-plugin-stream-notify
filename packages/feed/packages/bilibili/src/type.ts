import { Schema } from "koishi";

export interface BiliTicket {
  code: number;
  message: string;
  data: {
    ticket: string;
    create_at: number;
    ttl: number;
    context: Record<string, unknown>;
    nav: {
      img: string;
      sub: string;
    };
  };
  ttl: number;
}

export const BiliTicketSchema = Schema.object({
  code: Schema.number(),
  message: Schema.string(),
  data: Schema.object({
    ticket: Schema.string(),
    create_at: Schema.number(),
    ttl: Schema.number(),
    context: Schema.dict(Schema.any()),
    nav: Schema.object({
      img: Schema.string(),
      sub: Schema.string(),
    }),
  }),
  ttl: Schema.number(),
});
