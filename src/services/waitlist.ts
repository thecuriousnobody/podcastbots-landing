import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

interface WaitlistEntry {
  email: string;
  source: string;
  signupDate: any; // FirebaseTimestamp
  lastLogin: any; // FirebaseTimestamp
}

export const addToWaitlist = async (email: string): Promise<void> => {
  try {
    const waitlistRef = collection(db, 'waitlist');
    const entry: WaitlistEntry = {
      email,
      source: 'podcastbots.ai',
      signupDate: serverTimestamp(),
      lastLogin: serverTimestamp()
    };

    await addDoc(waitlistRef, entry);
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    throw new Error('Failed to join waitlist. Please try again.');
  }
};
