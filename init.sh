#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Create .env file from example if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file from example..."
    cp .env.example .env
    echo "Please update .env with your Firebase configuration"
fi

# Start the development server
echo "Starting development server..."
npm start
