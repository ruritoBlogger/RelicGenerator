FROM node:16

RUN apt-get update -qq

RUN mkdir /app
COPY package.json /app
COPY yarn.lock /app

WORKDIR /app
RUN yarn install

COPY . .