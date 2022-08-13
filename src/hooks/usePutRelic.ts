import { putRelic } from "@db/putRelic";
import { Relic } from "@domains/relic";
import { useState } from "react";

type UsePutRelicResult = {
  isLoading: boolean;
  putRelic: (props: Omit<Relic, "created_at" | "user_id">) => Promise<void>;
};

export const usePutRelic = (): UsePutRelicResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
