## RelicGenerator

原神の聖遺物の管理・構成の提案をサポートするwebアプリです.(制作中)


### 開発環境

コンテナを起動すると、 `http://localhost:3000`にページが、`http://localhost:8001`にDBをGUIで操作出来る`Dynamodb-admin`にアクセス出来る.

```bash
# 開発環境の整備
$ make build

# 開発環境の起動
$ make start

# DBのマイグレーション
$ bash ./dynamodb-local/generate-dynamodb-table.sh

# DBの取り扱い
$ aws dynamodb HOGEHOGE FUGAFUGA --endpoint-url http://0.0.0.0:8000
```

### 使用技術

`Next.js`を採用しています. またDBはAWSの`DynamoDB`を採用しています. 

開発環境では`DynamoDB-local`や`DynamoDB-admin`を採用しています.