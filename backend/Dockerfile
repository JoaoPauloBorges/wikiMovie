FROM node:13.12.0-alpine
WORKDIR /code

RUN ls

COPY ./package.json /code
RUN npm install --silent
COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "src/server.js" ]
