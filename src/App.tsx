import { Component, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import type { Relic } from "@domains/relic";
import { useQuery } from "@hooks/useQuery";
import styles from "./App.module.css";
import FixtureDataGenerator from "@components/FixtureDataGenerator";
import { RelicList } from "@components/RelicList";

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
    <div class={styles.App}>
      <header class={styles.header}>
        <RelicList relicList={relicList} />
        <FixtureDataGenerator />
      </header>
    </div>
  );
};

export default App;
