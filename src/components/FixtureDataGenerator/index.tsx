import { useGenerateRelicData } from "@hooks/useGenerateRelicData";
import { Button } from "@mui/material";

/**
 * DBに検証用の聖遺物データを追加するコンポーネント
 * TODO: 生成するデータ数とかを呼び出し元で制御出来るようにしたい
 */
const FixtureDataGenerator = (): JSX.Element => {
  const { isLoading, generateRelic } = useGenerateRelicData();

  const handleClick = async () => {
    await generateRelic();
  };

  return (
    <Button variant={"outlined"} disabled={isLoading} onClick={handleClick}>
      テストデータを生成する
    </Button>
  );
};

export default FixtureDataGenerator;
