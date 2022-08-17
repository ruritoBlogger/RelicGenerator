FROM node:18

RUN apt-get update -qq

RUN mkdir /app
WORKDIR /app
COPY . .