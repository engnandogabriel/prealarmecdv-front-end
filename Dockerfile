FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
ENV CI=false
RUN yarn build
EXPOSE 3001
CMD ["npx", "serve", "-s", "build", "-l", "3001"]
