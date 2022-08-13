import FixtureDataGenerator from "@components/FixtureDataGenerator";
import { RelicList } from "@components/RelicList";
import type { Relic } from "@domains/relic";
import { useQuery } from "@hooks/useQuery";
import { Container } from "@mui/material";
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

  return (
    <Container maxWidth={"lg"}>
      <RelicList relicList={relicList} />
      <FixtureDataGenerator />
    </Container>
  );
};

export default App;
