FROM node:14

WORKDIR /src

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
RUN npm install

COPY ./bin /src/bin
COPY ./routes /src/routes
COPY ./app.js /src/app.js
COPY ./asteroidHelper.js /src/asteroidHelper
