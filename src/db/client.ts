import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { config } from "./config";

const dynamoClient = new DynamoDBClient(config);

export { dynamoClient as ddbClient };
