import { Component, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import type { Relic } from "@domains/relic";
import { useQuery } from "@hooks/useQuery";
import FixtureDataGenerator from "@components/FixtureDataGenerator";
import { RelicList } from "@components/RelicList";
import Container from "@suid/material/Container";

const App: Component = () => {
  const [queryResult, runQuery] = useQuery(1);
  const [relicList, setRelicList] = createStore<Array<Relic>>([]);

  createEffect(() => {
    const f = async () => {
      await runQuery();
      setRelicList(queryResult());
    };
    f();
  });

  // TODO: UIを整えたい
  return (
    <Container>
      <RelicList relicList={relicList} />
      <FixtureDataGenerator />
    </Container>
  );
};

export default App;
