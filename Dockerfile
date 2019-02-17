FROM node:10.3.0-alpine as builder
WORKDIR /code

COPY package.json yarn.lock ./
RUN yarn install

COPY public/ ./public/
COPY src/ ./src/
RUN yarn build

# -----

FROM nginx:stable-alpine
MAINTAINER HelloFresh
COPY --from=builder /code/deploy/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /code/dist/ /usr/share/nginx/html/
COPY --from=builder /code/src/externalConfig.js.tmpl /tmp/
EXPOSE 80
CMD envsubst < /tmp/externalConfig.js.tmpl > /usr/share/nginx/html/externalConfig.js && nginx -g 'daemon off;'

# docker build . -t janus_admin
