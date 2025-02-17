# PodcastBots.ai Landing Page

Landing page for PodcastBots.ai, featuring a waitlist signup for beta testers.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` with your Firebase configuration.

3. Start development server:
```bash
npm start
```

## Project Structure

```
src/
├── components/
│   ├── Layout/     # Main layout wrapper
│   ├── Hero/       # Hero section with main content
│   └── BetaSignup/ # Waitlist signup form
├── theme/          # MUI theme configuration
├── firebase.ts     # Firebase initialization
└── App.tsx         # Main app component
```

## Firebase Setup

1. Create a new Firebase project
2. Enable Authentication and Firestore
3. Add your web app to get configuration
4. Update `.env` with your Firebase config values
5. Add `podcastbots.ai` to authorized domains

## Development

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Firebase hosting

## Deployment

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init
```

4. Deploy:
```bash
npm run build && firebase deploy
