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
/**
 * DynamoDBのQuery結果から必要な情報(今回だと聖遺物の情報)に変換する
 * @param output: DynamoDBのQuery結果
 */
const convertToRelics = (output: QueryCommandOutput): Array<Relic> => {
  const items = output.Items;
  if (items === undefined) {
    return [];
  } else {
    return items.filter<Relic>((item): item is Relic => isRelic(item));
  }
};

type UseQueryResult = [Accessor<Array<Relic>>, () => void];

/**
 * DynamoDBのQueryの実行や実行結果の管理を行うカスタムフック
 * @param user_id: Queryを行う際に必要となるユーザーID
 *
 * @return [Queryの実行結果, Queryの再実行]
 */
export const useQuery = (user_id: number): UseQueryResult => {
  const [queryResult, setQueryResult] = createSignal<Array<Relic>>([]);

  createEffect(() => {
    onMount(async () => {
      const output = await queryRelics({ user_id });
      setQueryResult(convertToRelics(output));
    });
    onCleanup(() => setQueryResult([]));
  });

  /**
   * Queryを実行してDynamoDBからデータを取得する
   */
  const runQuery = async () => {
    const output = await queryRelics({ user_id });
    setQueryResult(convertToRelics(output));
  };

  return [queryResult, runQuery];
};
