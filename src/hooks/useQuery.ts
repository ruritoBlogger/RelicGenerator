import { queryRelics } from "@api/dynamodb";
import { Relic } from "@domains/relic";
import { convertToRelics } from "@utils/convertFromQueryOutput";
import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Accessor,
} from "solid-js";

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
