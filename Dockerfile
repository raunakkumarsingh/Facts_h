# Use Node.js as a base image
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as a base image
FROM nginx:alpine

# Copy the build files from the builder stage to Nginx's default public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx.conf file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
