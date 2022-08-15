export type SubParameter =
  | HPParameterType
  | AttackParameterType
  | DefenseParameterType
  | FamiliarParameterType
  | ChargeParameterType
  | ConfessionRateParameterType
  | ConfessionDamageParameterType
  | MedicalParameterType
  | DamageBuffParameterType;

export type SubParameterName =
  | "HP"
  | "HP(率)"
  | "攻撃力"
  | "攻撃力(率)"
  | "防御力"
  | "防御力(率)"
  | "元素熟知"
  | "元素チャージ効率(率)"
  | "会心(率)"
  | "会心ダメージ(率)"
  | "治癒効果(率)"
  | "物理ダメージ(率)"
  | "炎元素ダメージ(率)"
  | "水元素ダメージ(率)"
  | "氷元素ダメージ(率)"
  | "雷元素ダメージ(率)"
  | "岩元素ダメージ(率)";

// HP, HP(%)
const HPParameters = ["HP", "HP_rate"];
type HPParameterType = typeof HPParameters[number];

// 攻撃力, 攻撃力(%)
const AttackParameters = ["Attack", "Attack_rate"];
type AttackParameterType = typeof AttackParameters[number];

// 防御力, 防御力(%)
const DefenseParameters = ["Defense", "Defense_rate"];
type DefenseParameterType = typeof DefenseParameters[number];

// 元素熟知
const FamiliarParameter = "Familiar";
type FamiliarParameterType = typeof FamiliarParameter;

// 元素チャージ効率(%)
const ChargeParameter = "Charge_rate";
type ChargeParameterType = typeof ChargeParameter;

// 会心率(%)
const ConfessionRateParameter = "Confession_rate";
type ConfessionRateParameterType = typeof ConfessionRateParameter;

// 会心ダメージ(%)
const ConfessionDamageParameter = "ConfessionDamage_rate";
type ConfessionDamageParameterType = typeof ConfessionDamageParameter;

// 治療効果(%)
const MedicalParameter = "Medical_rate";
type MedicalParameterType = typeof MedicalParameter;

// 各種ダメージバフ(%): 物理ダメージ, 炎元素ダメージ, 水元素ダメージ, 氷元素ダメージ, 雷元素ダメージ, 岩元素ダメージ
const DamageBuffParameters = [
  "PhysicsDamage_rate",
  "FireDamage_rate",
  "WaterDamage_rate",
  "IceDamage_rate",
  "ThunderDamage_rate",
  "RockDamage_rate",
];
type DamageBuffParameterType = typeof DamageBuffParameters[number];

// FIXME: つらいやり方をしてしまった
export function isSubParameter(target: unknown): target is SubParameter {
  return (
    typeof target === "string" &&
    (HPParameters.includes(target) ||
      AttackParameters.includes(target) ||
      DefenseParameters.includes(target) ||
      target === FamiliarParameter ||
      target === ChargeParameter ||
      target === ConfessionRateParameter ||
      target === ConfessionDamageParameter ||
      target === MedicalParameter ||
      DamageBuffParameters.includes(target))
  );
}

export const subParameterList: Array<SubParameter> = [
  ...HPParameters,
  ...AttackParameters,
  ...DefenseParameters,
  FamiliarParameter,
  ChargeParameter,
  ConfessionRateParameter,
  ConfessionDamageParameter,
  MedicalParameter,
  ...DamageBuffParameters,
];

export function convertSubParameterName(
  subParameter: SubParameter
): SubParameterName | "-" {
  switch (subParameter) {
    case "HP":
      return "HP";
    case "HP_rate":
      return "HP(率)";
    case "Attack":
      return "攻撃力";
    case "Attack_rate":
      return "攻撃力(率)";
    case "Familiar":
      return "元素熟知";
    case "Charge_rate":
      return "元素チャージ効率(率)";
    case "Confession_rate":
      return "会心(率)";
    case "ConfessionDamage_rate":
      return "会心ダメージ(率)";
    case "Medical_rate":
      return "治癒効果(率)";
    case "PhysicsDamage_rate":
      return "物理ダメージ(率)";
    case "FireDamage_rate":
      return "炎元素ダメージ(率)";
    case "WaterDamage_rate":
      return "水元素ダメージ(率)";
    case "IceDamage_rate":
      return "氷元素ダメージ(率)";
    case "ThunderDamage_rate":
      return "雷元素ダメージ(率)";
    case "RockDamage_rate":
      return "岩元素ダメージ(率)";
    default:
      return "-";
  }
}
