FROM node:10-alpine

WORKDIR /usr/app/webclient

COPY package.json .

RUN yarn -v
RUN npm i -g yarn
RUN yarn add global create-react-app 
RUN yarn install

COPY . .