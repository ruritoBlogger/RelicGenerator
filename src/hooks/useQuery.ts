import { Relic } from "@domains/relic";
import { convertToRelics } from "@utils/convertFromQueryOutput";
import useSWR from "swr";

interface UseQueryResult {
  relicList: Array<Relic> | undefined;
  error: Error | undefined;
}

/**
 * DynamoDBのQueryの実行や実行結果の管理を行うカスタムフック
 * @return [Queryの実行結果, Queryの再実行]
 */
export const useQuery = (): UseQueryResult => {
  const fetcher = (url: string): Promise<any> =>
    fetch(url)
      .then((res) => res.json())
      .then((rawData) => convertToRelics(rawData));

  const { data, error } = useSWR<Array<Relic>, Error>("/api/relics", fetcher);

  return {
    relicList: data,
    error: error,
  };
};
