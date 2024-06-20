# Use a base image with Node.js installed
FROM node:latest

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies from package-lock
RUN npm install

# Copy the application source code to the container
COPY . .

# Expose the port that the application runs on (change as needed)
EXPOSE 8088

# Command to start the Nest.js application
CMD ["npm", "run", "start:dev"]