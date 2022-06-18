import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb"

interface queryProps {
    user_id: number
}

export const queryRelics = async ({ user_id }: queryProps) => {
    const dynamoClient = new DynamoDBClient({
        endpoint: "http://localhost:8000",
        region: 'ap-northeast-1',
        credentials: { accessKeyId: 'dummy', secretAccessKey: 'dummy' }
    })

    // TODO: テーブル名などを決め打ちしたくない
    const command = new QueryCommand({
        TableName: 'relics',
        KeyConditionExpression: "#user_id = :user_id",
        ExpressionAttributeNames: {
            "#user_id": "USER_ID"
        },
        ExpressionAttributeValues: {
            ":user_id": { N: String(user_id) }
        },
    })

    return await dynamoClient.send(command)
}
