import { RelicName, RelicNames } from "@domains/relicNames";

// # TODO: DBの設計をしておく
export type Relic = {
  user_id: number;
  name: string;
  relicType: RelicName;
};

export function isRelic(maybeRelic: Record<string, any>): maybeRelic is Relic {
  return (
    isNum(maybeRelic.user_id) &&
    isStr(maybeRelic.name) &&
    hasRelicType(maybeRelic.relicType)
  );
}

function isNum(target: unknown): target is number {
  return target !== undefined && typeof target === "number";
}

function isStr(target: unknown): target is string {
  return target !== undefined && typeof target === "string";
}

function hasRelicType(target: unknown): target is RelicName {
  return isStr(target) && RelicNames.includes(target);
}
