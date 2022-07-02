import { Component, createEffect, For } from "solid-js";
import { createStore } from "solid-js/store";

import type { Relic } from "@domains/relic";
import { useQuery } from "@hooks/useQuery";
import styles from "./App.module.css";
import FixtureDataGenerator from "@components/FixtureDataGenerator";

const App: Component = () => {
  const [queryResult, runQuery] = useQuery(1);
  const [relics, setRelics] = createStore<Array<Relic>>([]);

  createEffect(() => {
    const f = async () => {
      await runQuery();
      setRelics(queryResult());
    };
    f();
  });

  // TODO: UIを整えたい
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <For each={relics} fallback={<div>Loading...</div>}>
          {(item, index) => (
            <div>
              <p>#{index()}</p>
              <p>{item.name}</p>
              <p>{item.relicType}</p>
              <For each={item.subParameters} fallback={<div>Loading...</div>}>
                {(item) => (
                  <p>
                    {item.name}: {item.value}
                  </p>
                )}
              </For>
            </div>
          )}
        </For>
        <FixtureDataGenerator />
      </header>
    </div>
  );
};

export default App;
