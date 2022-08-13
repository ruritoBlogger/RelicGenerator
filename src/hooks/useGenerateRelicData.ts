import { usePutRelic } from "./usePutRelic";

type UseGenerateRelicDataResult = {
  isLoading: boolean;
  generateRelic: () => Promise<void>;
};

export const useGenerateRelicData = (): UseGenerateRelicDataResult => {
  const { isLoading, putRelic } = usePutRelic();

  const callback = async () => {
    await putRelic({
      name: "中々強いやつ",
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
  };

  return {
    isLoading: isLoading,
    generateRelic: callback,
  };
};
