mkdir keys
openssl rand -base64 756 > ./keys/mongo.keyfile
chmod 400 ./keys/mongo.keyfile
openssl genrsa > ./keys/privkey.pem
openssl req -new -x509 -key ./keys/privkey.pem -out ./keys/fullchain.pem -sha256 -days 3650 -nodes -subj "/C=CA/ST=QC/L=Montreal/O=Billiecord/OU=Engineering/CN=stg.billiecord.com" 