FROM node:18.10-alpine

# Create App Directory
RUN mkdir -p /app
WORKDIR /app

# Install Dependencies
COPY package.json ./

# Copy app source code
COPY . .

RUN npm install

# Exports
EXPOSE 5000

CMD ["npm","start"]
