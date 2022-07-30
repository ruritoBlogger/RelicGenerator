import { Relic } from "@domains/relic";
import { For, Component } from "solid-js";

export const RelicList: Component<{ relicList: Array<Relic> }> = (props) => {
  return (
    <For each={props.relicList} fallback={<div>Loading...</div>}>
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
  );
};
