
FROM node:20-alpine

WORKDIR /app

COPY app/package.json ./

COPY app/server.js ./

ENV PORT=8080

CMD ["node", "server.js"]