import { putRelic } from "@db/putRelic";
import { Relic } from "@domains/relic";
import useSWR from "swr";

import { queryFetcher } from "../fetcher";

type UsePutRelicResult = {
  isLoading: boolean;
  putRelic: (props: Omit<Relic, "created_at" | "user_id">) => Promise<void>;
};

export const usePutRelic = (): UsePutRelicResult => {
  const userId = 1;
  const { mutate, isValidating } = useSWR({ id: userId }, queryFetcher);

  const callback = async (props: Omit<Relic, "created_at" | "user_id">) => {
    await putRelic({
      ...props,
    });
    await mutate();
  };

  return {
    isLoading: isValidating,
    putRelic: callback,
  };
};
