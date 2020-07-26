FROM node:8.7.0-alpine
RUN mkdir -p /app/server
WORKDIR /app/server

COPY package.json /app/server
# COPY package-lock.json

RUN npm install --silent

COPY src /app/server/src
COPY public /app/server/public
COPY server.js /app/server
RUN ls /app/server
RUN ls /app/server/public

# RUN rm -rf /app/server/build

RUN npm run build

CMD ["node", "server"]