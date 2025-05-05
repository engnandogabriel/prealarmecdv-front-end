FROM node:20-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install --legacy-peer-deps
RUN npm i --force
COPY ./ /app/
RUN npm run build
FROM nginx:1.19
COPY --from=build /app/build /usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]