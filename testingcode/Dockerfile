FROM node:alpine
RUN mkdir -p /usr/src/tester
WORKDIR /usr/src/tester
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node","index"]