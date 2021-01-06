FROM node:8.7.0-alpine
RUN mkdir -p /app/server
WORKDIR /app/server

COPY package.json /app/server
# COPY package-lock.json

RUN npm install --silent

COPY . /app/server

CMD ["npm", "start"]