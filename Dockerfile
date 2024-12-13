FROM node:18

USER node

WORKDIR /app

COPY ./package*.json .
RUN node --max-old-space-size=1000 $(which npm) ci

COPY ./gen_keyfile.sh .


RUN chmod u+x gen_keyfile.sh
RUN ./gen_keyfile.sh

COPY ./src ./src
COPY ./bin ./bin 

ENTRYPOINT [ "node", "--max-old-space-size=1000", "bin/www" ]


