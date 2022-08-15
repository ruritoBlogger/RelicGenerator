import { Relic } from "@domains/relic";
import useSWR from "swr";

import { queryFetcher } from "../fetcher";

interface UseQueryResult {
  relicList: Array<Relic>;
  error: Error | undefined;
}

/**
 * DynamoDBのQueryの実行や実行結果の管理を行うカスタムフック
 * @return [Queryの実行結果, Queryの再実行]
 */
export const useQuery = (): UseQueryResult => {
  const { data, error } = useSWR<Array<Relic>, Error>({ id: 1 }, queryFetcher);

  return {
    // NOTE: suspenseモードで動作させているのでdataには必ずRelic[]が入る
    //       ただSWR側でsuspenseモードで動作させても型が対応してなさそう
    relicList: data as Relic[],
    error: error,
  };
};
