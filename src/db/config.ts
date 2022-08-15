import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

export const config: DynamoDBClientConfig = {
  endpoint: "http://localhost:8000",
  region: "ap-northeast-1",
  credentials: {
    accessKeyId: "dummy",
    secretAccessKey: "dummy",
  },
};
