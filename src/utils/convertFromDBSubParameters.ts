import { isSubParameter, subParameter } from "@domains/subParameter";

/**
 * DynamoDBから取得したサブパラメーターを正しい形式に変換する
 * ex
 *   { HP_rate: 3.0, RockDamage_rate: 10.2 } => [{ name: HP_rate, value: 3.0 }, { name: RockDamage_rate, value: 10.2 }]
 * @param output DynamoDBから取得したサブパラメーター
 * @return 整形済みのサブパラメーター
 */
export const convertFromDBSubParameters = (
  output: unknown
): { name: subParameter; value: number }[] | null => {
  if (output === null || typeof output !== "object") return null;
  if (!allHaveSubParameterKeys(output)) return null;

  const keys = Object.keys(output);

  if (keys.every((key) => typeof output[key] === "number")) {
    return keys.map((key) => ({ name: key, value: output[key] }));
  } else {
    return null;
  }
};

// TODO: この処理は別で管理したい
function allHaveSubParameterKeys(
  target: unknown
): target is { [name: subParameter]: any } {
  if (target === null || typeof target !== "object") return false;

  const keys = Object.keys(target);
  if (keys.some((key) => !isSubParameter(key))) return false;

  return true;
}
