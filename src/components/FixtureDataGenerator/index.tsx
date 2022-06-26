import { Component } from "solid-js";

/**
 * DBに検証用の聖遺物データを追加するコンポーネント
 * TODO: 生成するデータ数とかを呼び出し元で制御出来るようにしたい
 */
const FixtureDataGenerator: Component = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>テストデータを生成する</button>;
};

export default FixtureDataGenerator;
