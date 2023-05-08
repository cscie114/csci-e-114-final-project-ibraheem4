FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
