FROM node:18

WORKDIR /app

COPY --chown=node:node ./package*.json .
RUN node --max-old-space-size=1000 $(which npm) ci

COPY --chown=node:node ./gen_keyfile.sh .

RUN chmod u+x ./gen_keyfile.sh

WORKDIR /keys
RUN openssl rand -base64 756 > ./mongo.keyfile
RUN chmod 400 ./mongo.keyfile
RUN openssl genrsa > ./privkey.pem
RUN openssl req -new -x509 -key ./privkey.pem -out ./fullchain.pem -sha256 -days 3650 -nodes -subj "/C=CA/ST=QC/L=Montreal/O=Billiecord/OU=Engineering/CN=stg.billiecord.com"

WORKDIR /app

COPY ./src ./src
COPY ./bin ./bin
COPY .env .env

EXPOSE 80


ENTRYPOINT [ "node", "--max-old-space-size=1000", "bin/www" ]


