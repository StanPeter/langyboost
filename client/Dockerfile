### STAGE 1 - preparing project

# grab Node version
FROM node:18.12.1-alpine as build

LABEL app="Langyboost FE"

#USER root

#RUN groupadd -f node && useradd -g node node

#RUN apt-get update && apt-get install -y \
#  nano \
#  iproute2 \
#  iputils-ping \
#  telnet \
#  dnsutils \
#  zip \
#  unzip

#USER node

# creating working directory
WORKDIR /app

# copying dependency setting files
COPY deployment/package.* /app/

# env variables
ENV PATH /app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING true
ENV WATCHPACK_POLLING true

# installing dependencies
RUN npm install

# copying rest of files into app
COPY deployment/ /app/
 
### STAGE 2 - build the final image and copy the react build files
# creating an optimized build
RUN npm run build

FROM nginx:stable-alpine

COPY deployment/nginx/nginx.conf /etc/nginx/nginx.conf

# Remove default nginx website
RUN rm -rf "/usr/share/nginx/html/*"

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

# start app
CMD ["nginx", "-g", "daemon off;"]
