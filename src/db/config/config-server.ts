import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

export const serverConfig: DynamoDBClientConfig = {
  // NOTE: SSRしている関係上サーバー側でもクライアント側でも呼び出される
  endpoint: "http://dynamodb-local:8000",
  region: "ap-northeast-1",
  credentials: {
    accessKeyId: "dummy",
    secretAccessKey: "dummy",
  },
};
