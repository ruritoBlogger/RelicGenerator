import { Component } from "solid-js";
import { usePutRelic } from "@hooks/usePutRelic";

/**
 * DBに検証用の聖遺物データを追加するコンポーネント
 * TODO: 生成するデータ数とかを呼び出し元で制御出来るようにしたい
 */
const FixtureDataGenerator: Component = () => {
  const { isLoading, putRelic } = usePutRelic();
  const handleClick = async () => {
    await putRelic();
  };

  return (
    <button disabled={isLoading()} onClick={handleClick}>
      テストデータを生成する
    </button>
  );
};

export default FixtureDataGenerator;
