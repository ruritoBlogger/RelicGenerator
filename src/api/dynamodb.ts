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
    const dynamoClient = new aws.DynamoDB.DocumentClient({
        region: 'ap-northeast-1',
        credentials: { accessKeyId: 'MY_ACCESS_KEY_ID', secretAccessKey: "MY_SECRET_ACCESS_KEY" },
    })

    // TODO: tableをコード側で生成する
    // TODO: テーブル名などを決め打ちしたくない
    return await dynamoClient.put({
        TableName: 'relics',
        Item: {
            HashKey: Date.now().toString(),
            user_id: 1,
            name,
        }
    }).promise()
}
