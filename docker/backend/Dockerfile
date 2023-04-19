FROM node:16

WORKDIR /app

RUN apt-get update && \
    apt-get install -y python3 build-essential

COPY ./backend/ /app/

RUN npm ci && \
    npm rebuild bcrypt --build-from-source

EXPOSE 8080
