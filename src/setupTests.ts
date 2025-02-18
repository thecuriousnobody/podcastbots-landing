// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock Firebase
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

// Mock environment variables
process.env.REACT_APP_FIREBASE_API_KEY = 'test-api-key';
process.env.REACT_APP_FIREBASE_PROJECT_ID = 'test-project-id';
process.env.REACT_APP_FIREBASE_STORAGE_BUCKET = 'test-storage-bucket';
process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 'test-sender-id';
process.env.REACT_APP_FIREBASE_APP_ID = 'test-app-id';
process.env.REACT_APP_FIREBASE_MEASUREMENT_ID = 'test-measurement-id';
