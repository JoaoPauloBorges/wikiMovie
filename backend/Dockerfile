# FROM node:12-alpine as base

# FROM base as builder

# # Some packages (e.g. @google-cloud/profiler) require additional
# # deps for post-install scripts
# RUN apk add --update --no-cache \
#     python \
#     make \
#     g++

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --silent

# FROM base

# WORKDIR /usr/src/app

# COPY --from=builder /usr/src/app/node_modules ./node_modules

# COPY . .

# ENTRYPOINT [ "node", "src/server.js" ]


FROM node:13.12.0-alpine
WORKDIR /code

RUN sh -c ls

COPY ./package.json /code
RUN npm install --silent
COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "src/server.js" ]
