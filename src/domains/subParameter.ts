export type subParameter =
  | HPParameter
  | AttackParameter
  | DefenseParameter
  | FamiliarParameter
  | ChargeParameter
  | ConfessionRateParameter
  | ConfessionDamageParameter
  | MedicalParameter
  | DamageBuffParameter;

// HP | HP(%)
type HPParameter = "HP" | "HP_rate";
// 攻撃力 | 攻撃力(%)
type AttackParameter = "Attack" | "Attack_rate";
// 防御力 | 防御力(%)
type DefenseParameter = "Defense" | "Defense_rate";
// 元素熟知
type FamiliarParameter = "Familiar";
// 元素チャージ効率(%)
type ChargeParameter = "Charge_rate";
// 会心率(%)
type ConfessionRateParameter = "Confession_rate";
// 会心ダメージ(%)
type ConfessionDamageParameter = "ConfessionDamage_rate";
// 治療効果(%)
type MedicalParameter = "Medical_rate";
// 各種ダメージバフ(%), 物理ダメージ | 炎元素ダメージ | 水元素ダメージ | 氷元素ダメージ | 雷元素ダメージ | 岩元素ダメージ
type DamageBuffParameter =
  | "PhysicsDamage_rate"
  | "FireDamage_rate"
  | "WaterDamage_rate"
  | "IceDamage_rate"
  | "ThunderDamage_rate"
  | "RockDamage_rate";
