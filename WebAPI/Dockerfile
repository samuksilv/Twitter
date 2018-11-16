FROM node:10-alpine

WORKDIR /usr/app/webapi

COPY package.json .

RUN npm i -g yarn
RUN yarn install

COPY . .