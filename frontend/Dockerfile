FROM node:13.12.0-alpine as frontend
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine AS webserver
VOLUME /var/cache/nginx
COPY --from=frontend app/dist/frontend/ usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4201