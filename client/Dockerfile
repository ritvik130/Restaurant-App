# Dockerfile for React client

# Build react client
FROM node:18.10-alpine
# Working directory be app
WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]