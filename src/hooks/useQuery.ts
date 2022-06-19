import { queryRelics } from "@api/dynamodb";
import { QueryCommandOutput, AttributeValue } from "@aws-sdk/client-dynamodb";
import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Accessor,
} from "solid-js";

// TODO: Relicはdomainに置きたい
//       内容も充実させたい
type Relic = Record<"user_id" | "name", AttributeValue>;

function isRelic(target: Record<string, any>): target is Relic {
  return target.user_id !== undefined && target.name !== undefined;
}

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
