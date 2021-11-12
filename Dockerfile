# Base image
FROM node:16

# Upgrade npm
RUN  npm i -g npm@latest

# Install packages ensuring compatibility
COPY package.json /shrander_game/
WORKDIR /shrander_game/
RUN npm install

# Add installed modules to path
ENV PATH /shrander_game/node_modules/.bin:$PATH

# Add files needed for app
COPY ./assets /shrander_game/assets
COPY ./app.json /shrander_game/app.json
COPY ./App.js /shrander_game/App.js

# Set working directory
WORKDIR /shrander_game/

ENTRYPOINT bash
