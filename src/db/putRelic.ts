import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { Relic } from "@domains/relic";

export const putRelic = async ({
  name,
  relicType,
  subParameters,
}: Omit<Relic, "created_at" | "user_id">) => {
  const dynamoClient = new DynamoDBClient({
    endpoint: "http://localhost:8000",
    region: "ap-northeast-1",
    credentials: { accessKeyId: "dummy", secretAccessKey: "dummy" },
  });

  /**
   * 置きたい情報
   * {
   *   "HogeParam": value,
   *   "FugaParam": value,
   * }
   *
   * in AttributeValue
   * M: {
   *    "HogeParam": { "N": value },
   *    "FugaParam": { "N": value }
   * }
   *
   * subParametersの中身
   * [
   *   {
   *     "name": "HogeParam",
   *     "value": value,
   *   },
   *   {
   *     "name": "FugaParam",
   *     "value": value
   *   }
   * ]
   */
  const mapValue = {};
  subParameters.forEach((subParameter) => {
    Object.assign(mapValue, {
      [subParameter.name]: { N: subParameter.value },
    });
  });

  // TODO: テーブル名などを決め打ちしたくない
  const command = new PutItemCommand({
    TableName: "relics",
    Item: {
      // NOTE: ユーザーは今のところID: 1固定
      user_id: { N: "1" },
      created_at: { S: new Date().toString() },
      name: { S: name },
      relicType: { S: relicType },
      subParameters: {
        M: mapValue,
      },
    },
  });

  return await dynamoClient.send(command);
};
