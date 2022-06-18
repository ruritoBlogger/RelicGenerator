#! /bin/bash

aws dynamodb create-table --cli-input-json file://dynamodb-local/dynamodb.json --endpoint-url http://0.0.0.0:8000 \
&& aws dynamodb list-tables --endpoint-url http://0.0.0.0:8000