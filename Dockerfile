# Use Node.js image as a base
FROM node:latest AS development

# Set working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN npm install yarn

# Install dependencies
RUN yarn 

# Copy the entire project to the container
COPY . .

# Expose port 3000 for development server
EXPOSE 3000

# Start the development server with Vite
CMD ["yarn", "dev"]
