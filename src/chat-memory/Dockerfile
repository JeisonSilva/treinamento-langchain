FROM node:24-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/index.js"]