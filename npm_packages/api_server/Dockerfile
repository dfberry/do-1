# Use the official Node.js image as the base image
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
#COPY package.json package-lock.json ./
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the application (if needed, e.g., for TypeScript)
# Uncomment the following line if you have a build step
# RUN npm run build

# Use a smaller base image for the runtime
FROM node:22-alpine AS runtime

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .

# Expose the port (default to 3000 if not provided)
ENV PORT=3000
EXPOSE $PORT

# Command to run the application
CMD ["node", "index.js"]