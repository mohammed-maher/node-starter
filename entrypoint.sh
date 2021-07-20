#!/bin/bash

# Generate prisma client
npx prisma generate

# Run build
npm run build

# Start the app
npm run start
