# ==== CONFIGURE =====
# Use an official Node runtime as a parent image
FROM node:19-alpine


# Set the working directory to /app
WORKDIR /usr/src/app

# ==== BUILD =====
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install --silent
#RUN npm ci

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# ==== RUN =======
# Expose the port used by the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
