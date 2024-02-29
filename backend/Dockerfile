# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
COPY db.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2
FROM ubuntu:latest
USER root
WORKDIR /home/app
COPY --from=build-step /app/package.json /home/app
COPY --from=build-step /app/db.json /home/app
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_20.x  | bash -
RUN apt-get -y install nodejs
RUN apt update
RUN apt-get -y install nginx
RUN npm i -g json-server@0.17.4

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app /home/app
CMD json-server --watch /home/app/db.json --no-cors --host 0.0.0.0

#CMD json-server --watch /home/app/db.json --routes /home/app/routes.json --no-cors --host 0.0.0.0
