FROM node:16-alpine as build-stage
WORKDIR /app

# 1 - build app and server
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN cd server && npm install

# 2 - prod
FROM node:16-alpine as production-stage
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/server ./server
EXPOSE 3000
CMD [ "node", "./server/server.js" ]