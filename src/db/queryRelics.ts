import { QueryCommand } from "@aws-sdk/client-dynamodb";

import { ddbClient } from "./client";

interface queryProps {
  user_id: number;
}

export const queryRelics = async ({ user_id }: queryProps) => {
  // TODO: テーブル名などを決め打ちしたくない
  const command = new QueryCommand({
    TableName: "relics",
    KeyConditionExpression: "user_id = :user_id",
    ExpressionAttributeValues: {
      ":user_id": { N: String(user_id) },
    },
  });

  return await ddbClient.send(command);
};
