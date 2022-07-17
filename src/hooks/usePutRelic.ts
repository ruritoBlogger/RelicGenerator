import { createSignal, Accessor } from "solid-js";
import { putRelic } from "@api/dynamodb";

type UsePutRelicResult = {
  isLoading: Accessor<boolean>;
  // TODO: putRelicの引数に聖遺物の生成情報を渡すようにする
  putRelic: () => Promise<void>;
};

export const usePutRelic = (): UsePutRelicResult => {
  const [isLoading, setIsLoading] = createSignal<boolean>(false);

  const callback = async () => {
    setIsLoading(true);
    await putRelic({ name: "testaaa1234" });
    setIsLoading(false);
  };

  return {
    isLoading: isLoading,
    putRelic: callback,
  };
};
