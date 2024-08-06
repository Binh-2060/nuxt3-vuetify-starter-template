FROM node:20-alpine3.18 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install 

COPY . .

RUN yarn generate 

FROM nginx:1.26-alpine as production

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

COPY ./configs/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


