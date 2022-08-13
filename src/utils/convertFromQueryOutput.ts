import { QueryCommandOutput } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { isRelic, Relic } from "@domains/relic";

import { convertFromDBSubParameters } from "./convertFromDBSubParameters";

/**
 * DynamoDBのQuery結果から必要な情報(今回だと聖遺物の情報)に変換する
 * @param output: DynamoDBのQuery結果
 */
export const convertToRelics = (output: QueryCommandOutput): Array<Relic> => {
  const rawItems = output.Items;
  if (rawItems === undefined) {
    return [];
  } else {
    const items = rawItems.map((item) => unmarshall(item));
    /**
     * NOTE: 日付データ(String) -> 日付データ(Date)
     *       サブパラメーター({key: value}) -> サブパラメーター({name: key, value: value})
     */
    const convertedItems = items.map((item) => ({
      ...item,
      created_at: new Date(item.created_at),
      subParameters: convertFromDBSubParameters(item.subParameters),
    }));
    return convertedItems.filter<Relic>((item): item is Relic => isRelic(item));
  }
};
