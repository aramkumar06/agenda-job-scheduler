FROM node:10
WORKDIR /var/www/scheduler
COPY package.json ./
RUN npm install
COPY . .