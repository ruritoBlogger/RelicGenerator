import * as aws from "aws-sdk"

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
    aws.config.update({
        dynamodb: { endpoint: `http://localhost:8000` },
        region: 'ap-northeast-1',
        credentials: { accessKeyId: 'dummy', secretAccessKey: "dummy" },
    })
    const dynamoClient = new aws.DynamoDB.DocumentClient()

    // TODO: tableをコード側で生成する
    // TODO: テーブル名などを決め打ちしたくない
    return await dynamoClient.put({
        TableName: 'relics',
        Item: {
            CREATED_AT: Date.now().toString(),
            USER_ID: 1,
            name,
        }
    }).promise()
}
