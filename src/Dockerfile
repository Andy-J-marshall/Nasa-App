FROM node:14

WORKDIR /src

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
RUN npm install

COPY ./public /src/public
COPY ./assets /src/src/assets
COPY ./components /src/src/components
COPY ./app.css /src/src/app.css
COPY ./App.js /src/src/App.js
COPY ./index.js /src/src/index.js
