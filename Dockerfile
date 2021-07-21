FROM node

# Working directory
WORKDIR /src

# Install packages
COPY package*.json ./
RUN npm install && mv node_modules ../

# Copy the project
COPY . .

# Make .entrypoint.sh executable
RUN chmod +x ./entrypoint.sh
