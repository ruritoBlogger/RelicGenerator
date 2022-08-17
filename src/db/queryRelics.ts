import { QueryCommand } from "@aws-sdk/client-dynamodb";

import { ddbClient, ddbServer } from "./client";

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

  if (typeof window !== "undefined") {
    return await ddbClient.send(command);
  } else {
    return await ddbServer.send(command);
  }
};
