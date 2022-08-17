import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { clientConfig, serverConfig } from "./config";

const dynamoClient = new DynamoDBClient(clientConfig);
const dynamoServer = new DynamoDBClient(serverConfig);

export { dynamoClient as ddbClient, dynamoServer as ddbServer };
