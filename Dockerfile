FROM node:16

RUN apt-get update -qq

RUN mkdir /app
WORKDIR /app
COPY . .