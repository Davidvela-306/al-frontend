FROM node:latest AS build
WORKDIR /app
# copiar package.json y bun.lock
COPY package*.json /app/
COPY bun.lock /app/
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --configuration production

### stage 2
FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/frontend/browser /var/www/app/dist/frontend/browser
EXPOSE 80
CMD ["nginx","-g", "daemon off;"]

###########################################################
# docker build -t frontend .
# docker run --rm -d -p 80:80/tcp frontend:latest 
###########################################################