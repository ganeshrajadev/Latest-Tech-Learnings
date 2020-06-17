FROM node:13.12.0-alpine

WORKDIR /app


COPY package.json ./
COPY package.json  ./
RUN npm install

COPY .  ./

EXPOSE 3300

CMD [ "npm","start" ]