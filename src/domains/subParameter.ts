export type subParameter =
  | HPParameterType
  | AttackParameterType
  | DefenseParameterType
  | FamiliarParameterType
  | ChargeParameterType
  | ConfessionRateParameterType
  | ConfessionDamageParameterType
  | MedicalParameterType
  | DamageBuffParameterType;

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
export function isSubParameter(target: unknown): target is subParameter {
  return (
    typeof target === "string" &&
    (target in HPParameters ||
      target in AttackParameters ||
      target in DefenseParameters ||
      target === FamiliarParameter ||
      target === ChargeParameter ||
      target === ConfessionRateParameter ||
      target === ConfessionDamageParameter ||
      target === MedicalParameter ||
      target in DamageBuffParameters)
  );
}
