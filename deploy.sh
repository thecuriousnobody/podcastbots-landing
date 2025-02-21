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

# Clear Firebase hosting cache
echo "Clearing Firebase hosting cache..."
firebase hosting:clearCache

# Deploy to Firebase with specific target
echo "Deploying to Firebase..."
firebase deploy --only hosting:landing

echo "Deployment complete! Your site should be live at podcastbots-landing--potentiator-ai.us-central1.hosted.app"
