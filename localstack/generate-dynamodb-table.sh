#! /bin/bash

# localStackのコンテナにアクセスする
docker-compose exec localstack \
    awslocal dynamodb create-table --cli-input-json file:///localstack/dynamodb.json \
    && awslocal dynamodb list-tables