# Stage 1: Building the application
FROM node:20-alpine AS builder

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the entire project
COPY . .

# Build the application
RUN npm update && npm run build


# Stage 2: Serving the application
FROM nginx:1.23-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx contents
RUN rm -rf ./*

# Copy build files from the builder stage
COPY --from=builder /app/build .
