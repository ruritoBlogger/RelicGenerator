import { createSignal, Accessor } from "solid-js";
import { putRelic } from "@api/dynamodb";
import { Relic } from "@domains/relic";

type UsePutRelicResult = {
  isLoading: Accessor<boolean>;
  putRelic: (props: Omit<Relic, "created_at" | "user_id">) => Promise<void>;
};

export const usePutRelic = (): UsePutRelicResult => {
  const [isLoading, setIsLoading] = createSignal<boolean>(false);

  const callback = async ({
    name,
    relicType,
    subParameters,
  }: Omit<Relic, "created_at" | "user_id">) => {
    setIsLoading(true);
    await putRelic({
      name,
      relicType,
      subParameters,
    });
    setIsLoading(false);
  };

  return {
    isLoading: isLoading,
    putRelic: callback,
  };
};
