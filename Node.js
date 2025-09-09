FROM node:18-alpine

# set working directory
WORKDIR /app

# copy package.json and install dependencies
COPY package.json ./
RUN npm install

# copy rest of the app
COPY . .

# expose app port
EXPOSE 3000

# start app
CMD ["node", "server.js"]

