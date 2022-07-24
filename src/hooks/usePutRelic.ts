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
    await putRelic({
      name: "そこそこ強いやつ",
      relicType: "逆飛びの流星",
      subParameters: [
        {
          name: "HP_rate",
          value: 7.8,
        },
        {
          name: "Attack_rate",
          value: 17.8,
        },
        {
          name: "Confession_rate",
          value: 27.8,
        },
      ],
    });
    setIsLoading(false);
  };

  return {
    isLoading: isLoading,
    putRelic: callback,
  };
};
