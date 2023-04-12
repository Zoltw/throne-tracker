FROM node:16

WORKDIR /app

COPY ./backend/ /app/

RUN npm ci

EXPOSE 8080

CMD ["npm", "start"]
