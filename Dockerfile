FROM node:12-alpine

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /user/src/app

# intalling dependencies
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

# copying source files
COPY . .

# building app
RUN yarn build

EXPOSE 3000

# running app
CMD ["yarn", "start"]
