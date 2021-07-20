FROM node

# Working directory
WORKDIR /src

# Install packages
COPY package*.json ./
RUN npm install && mv node_modules ../

# Copy the project
COPY . .

RUN chmod +x ./entrypoint.sh
