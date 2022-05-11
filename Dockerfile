# pulling base image
FROM node:latest as node
# Setting the remote DIR to /app
WORKDIR /digicamp_frontend
ENV PATH="./node_modules/.bin:$PATH"
# COPY the current folder
COPY . .
# run npm i (install all the dependencies)
RUN npm install
# this will generate dist
RUN npm run build --prod
