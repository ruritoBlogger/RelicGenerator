import FixtureDataGenerator from "@components/FixtureDataGenerator";
import { RelicList } from "@components/RelicList";
import type { Relic } from "@domains/relic";
import { useQuery } from "@hooks/useQuery";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const App: NextPage = () => {
  const [queryResult, runQuery] = useQuery(1);
  const [relicList, setRelicList] = useState<Array<Relic>>([]);

  useEffect(() => {
    const f = async (): Promise<void> => {
      await runQuery();
      setRelicList(queryResult);
    };
    f();
  });

  // TODO: UIを整えたい
  return (
    <div>
      <RelicList relicList={relicList} />
      <FixtureDataGenerator />
    </div>
  );
};

export default App;
