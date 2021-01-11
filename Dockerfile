FROM node:15.5.0-alpine3.10

RUN apk add --update --no-cache \
    python \
    make \
    g++

WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install --frozen-lockfile


EXPOSE 3003
CMD ["npm", "run", "dev"]