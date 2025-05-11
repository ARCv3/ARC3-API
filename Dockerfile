FROM node:alpine AS build

WORKDIR /app
COPY --chown=node:node --chmod=755 ./package*.json ./
RUN node $(which npm) ci

WORKDIR /keys
RUN apk add openssl;
COPY gen_keyfile.sh ./gen_keyfile.sh
RUN chmod +x ./gen_keyfile.sh
RUN ./gen_keyfile.sh


FROM node:lts-slim
USER node

WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules /app/node_modules
COPY --chown=node:node --from=build /keys /app
COPY --chown=node:node ./src ./src
COPY --chown=node:node ./bin ./bin

EXPOSE 80


ENTRYPOINT [ "node", "bin/www" ]


