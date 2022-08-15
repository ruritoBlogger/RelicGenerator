import { Relic } from "@domains/relic";
import useSWR from "swr";

import { queryFetcher } from "../fetcher";

interface UseQueryResult {
  relicList: Array<Relic> | undefined;
  error: Error | undefined;
}

/**
 * DynamoDBのQueryの実行や実行結果の管理を行うカスタムフック
 * @return [Queryの実行結果, Queryの再実行]
 */
export const useQuery = (): UseQueryResult => {
  const { data, error } = useSWR({ id: 1 }, queryFetcher);

  return {
    relicList: data,
    error: error,
  };
};
