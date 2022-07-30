import { Component } from "solid-js";
import { useGenerateRelicData } from "@hooks/useGenerateRelicData";

/**
 * DBに検証用の聖遺物データを追加するコンポーネント
 * TODO: 生成するデータ数とかを呼び出し元で制御出来るようにしたい
 */
const FixtureDataGenerator: Component = () => {
  const { isLoading, generateRelic } = useGenerateRelicData();
  const handleClick = async () => {
    await generateRelic();
  };

  return (
    <button disabled={isLoading()} onClick={handleClick}>
      テストデータを生成する
    </button>
  );
};

export default FixtureDataGenerator;
