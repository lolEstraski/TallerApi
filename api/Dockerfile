FROM node:18-alpine

ENV DIRECTORY='/home/api/'
WORKDIR ${DIRECTORY}

COPY . .

RUN npm install

EXPOSE 3000

CMD node src/api.js

