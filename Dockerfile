FROM node:alpine AS build

WORKDIR /app
COPY --chown=node:node ./package*.json ./
RUN node $(which npm) ci

WORKDIR /keys
RUN apk add openssl;
COPY gen_keyfile.sh ./gen_keyfile.sh
RUN chmod +x ./gen_keyfile.sh
RUN ./gen_keyfile.sh


FROM node:lts-slim

WORKDIR /app

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /keys /app
COPY ./src ./src
COPY ./bin ./bin

EXPOSE 80


ENTRYPOINT [ "node", "bin/www" ]


