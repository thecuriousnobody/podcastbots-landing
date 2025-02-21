#!/bin/bash

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check if user is logged in to Firebase
firebase login

# Build the project
echo "Building project..."
npm run build

# Deploy to Firebase
echo "Deploying to Firebase..."
firebase deploy

echo "Deployment complete! Your site should be live at potentiator-ai.web.app"
