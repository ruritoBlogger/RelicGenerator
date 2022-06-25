import { RelicName, RelicNames } from "@domains/relicNames";
import { subParameter, isSubParameter } from "@domains/subParameter";

// # TODO: RelicTypeに対応する聖遺物の画像を取り扱えるようにする
export type Relic = {
  user_id: number;
  name: string;
  // FIXME: ここの命名何とかしたい
  relicType: RelicName;
  // TODO: ここは配列の長さが必ず3 or 4になるので、その情報も型に入れたい
  subParameters: Array<{ name: subParameter; value: number }>;
};

/**
 * 入力されたRecord型の情報がRelic型かどうかを判断する型ガード関数
 * @param maybeRelic: チェックしたいデータ
 *
 * @return Relic型かどうか(boolean)
 */
export function isRelic(maybeRelic: Record<string, any>): maybeRelic is Relic {
  return (
    isNum(maybeRelic.user_id) &&
    isStr(maybeRelic.name) &&
    hasRelicType(maybeRelic.relicType) &&
    hasSubParameters(maybeRelic.subParameters)
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

function hasSubParameters(
  target: unknown
): target is Array<{ name: subParameter; value: number }> {
  return (
    Array.isArray(target) && target.every((item) => isSubParameterHash(item))
  );
}

function isSubParameterHash(
  target: unknown
): target is { name: subParameter; value: number } {
  // check: target is object
  if (target === null || typeof target !== "object") return false;

  // check: target is { name: subParameter, value: number }
  if ("name" in target && "value" in target) {
    // ここはTypeScriptよりも俺の方が賢い
    return (
      isSubParameter((target as { name: any }).name) &&
      typeof (target as { value: any }).value === "number"
    );
  } else {
    return false;
  }
}
