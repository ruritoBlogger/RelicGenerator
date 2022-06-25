import { Component, createEffect } from "solid-js";

import { queryRelics } from "./api/dynamodb";
import logo from "./logo.svg";
import styles from "./App.module.css";
import FixtureDataGenerator from "@components/FixtureDataGenerator";

const App: Component = () => {
  createEffect(() =>
    queryRelics({ user_id: 1 }).then((res) => console.log(res))
  );

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <FixtureDataGenerator />
      </header>
    </div>
  );
};

export default App;
