import { queryRelics } from "@api/dynamodb";
import { QueryCommandOutput } from "@aws-sdk/client-dynamodb";
import { Relic, isRelic } from "@domains/relic";
import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Accessor,
} from "solid-js";

// TODO: 別ファイルに切り分けたい
const convertToRelics = (output: QueryCommandOutput): Array<Relic> => {
  const items = output.Items;
  if (items === undefined) {
    return [];
  } else {
    return items.filter<Relic>((item): item is Relic => isRelic(item));
  }
};

type UseQueryResult = [Accessor<Array<Relic>>, () => void];

export const useQuery = (user_id: number): UseQueryResult => {
  const [queryResult, setQueryResult] = createSignal<Array<Relic>>([]);

  createEffect(() => {
    onMount(async () => {
      const output = await queryRelics({ user_id });
      setQueryResult(convertToRelics(output));
    });
    onCleanup(() => setQueryResult([]));
  });

  const runQuery = async () => {
    const output = await queryRelics({ user_id });
    setQueryResult(convertToRelics(output));
  };

  return [queryResult, runQuery];
};
