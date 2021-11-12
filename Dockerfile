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
COPY ./assets /shrander_game/app/assets
COPY ./App.js /shrander_game/app/App.js
COPY ./app.json /shrander_game/app/app.json

# Set working directory
WORKDIR /shrander_game/app/

ENTRYPOINT bash
