FROM node:18-alpine
WORKDIR /app
RUN apk update && apk add --no-cache g++
RUN apk update && apk add --no-cache openjdk11-jdk python3 python3-dev
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"
COPY package.json .
RUN npm i
COPY . .
EXPOSE 8800
CMD ["node","index.js"]