import { queryRelics } from "@db/queryRelics";
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
  const fetcher = ({ id }: { id: number }) =>
    queryRelics({ user_id: id }).then((res) => convertToRelics(res));

  const { data, error } = useSWR({ id: 1 }, fetcher);

  return {
    relicList: data,
    error: error,
  };
};
