// # TODO: DBの設計をしておく
export type Relic = Record<"user_id" | "name", string>;

export function isRelic(target: Record<string, any>): target is Relic {
  return target.user_id !== undefined && target.name !== undefined;
}
