FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN --mount=type=cache,mode=0777,target=/root/.yarn yarn install --immutable --mode skip-build --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
