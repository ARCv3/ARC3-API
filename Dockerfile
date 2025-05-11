FROM node:alpine AS build

WORKDIR /app
COPY --chown=root:root --chmod=755 ./package*.json ./
RUN node $(which npm) ci

WORKDIR /keys
RUN apk add openssl;
COPY --chown=root:root --chmod=755 gen_keyfile.sh ./gen_keyfile.sh
RUN chmod +x ./gen_keyfile.sh
RUN ./gen_keyfile.sh


FROM node:lts-slim
USER node

WORKDIR /app

COPY --chown=root:root --chmod=755 --from=build /app/node_modules /app/node_modules
COPY --chown=root:root --chmod=755 --from=build /keys /app
COPY --chown=root:root --chmod=755 ./src ./src
COPY --chown=root:root --chmod=755 ./bin ./bin

EXPOSE 80


ENTRYPOINT [ "node", "bin/www" ]


