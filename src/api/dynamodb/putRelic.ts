import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"

interface putProps {
    name: string
}

// TODO: domainsなどに切り出す
// TODO: パラメータに必要な内容を考える(DBの設計しろ)
interface Relic {
    id: number
    user_id: number
    name: string
}

export const putRelic = async ({ name }: putProps) => {
    const dynamoClient = new DynamoDBClient({
        endpoint: "http://localhost:8000",
        region: 'ap-northeast-1',
        credentials: { accessKeyId: 'dummy', secretAccessKey: 'dummy' }
    })

    // TODO: tableをコード側で生成する
    // TODO: テーブル名などを決め打ちしたくない
    const command = new PutItemCommand({
        TableName: 'relics',
        Item: {
            CREATED_AT: { S: Date.now().toString() },
            USER_ID: { N: "1" },
            name: { S: name },
        },
    })

    return await dynamoClient.send(command)
}