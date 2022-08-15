import { RelicNames } from "@domains/relicNames";
import { subParameterList } from "@domains/subParameter";

import { usePutRelic } from "./usePutRelic";

type UseGenerateRelicDataResult = {
  isLoading: boolean;
  generateRelic: () => Promise<void>;
};

export const useGenerateRelicData = (): UseGenerateRelicDataResult => {
  const { isLoading, putRelic } = usePutRelic();

  const callback = async () => {
    await putRelic({
      name: `ランダム生成_${Math.ceil(Math.random() * 100)}`,
      relicType: RelicNames[Math.ceil(Math.random() * RelicNames.length)],
      subParameters: [
        {
          name: subParameterList[
            Math.ceil(Math.random() * subParameterList.length)
          ],
          // NOTE: 小数点第三位以下で四捨五入
          value: Math.round(Math.random() * 50 * 1000) / 1000,
        },
        {
          name: subParameterList[
            Math.ceil(Math.random() * subParameterList.length)
          ],
          value: Math.round(Math.random() * 50 * 1000) / 1000,
        },
        {
          name: subParameterList[
            Math.ceil(Math.random() * subParameterList.length)
          ],
          value: Math.round(Math.random() * 50 * 1000) / 1000,
        },
      ],
    });
  };

  return {
    isLoading: isLoading,
    generateRelic: callback,
  };
};
