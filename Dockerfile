FROM node:18-bullseye

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3456

CMD [ "node","app.js" ]