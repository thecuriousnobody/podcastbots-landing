import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  getDocs, 
  query, 
  where,
  FieldValue 
} from 'firebase/firestore/lite';
import { db } from '../firebase';

interface WaitlistEntry {
  email: string;
  source: string;
  signupDate: FieldValue;
  lastLogin: FieldValue;
}

export const addToWaitlist = async (email: string): Promise<void> => {
  console.log('Attempting to add email to waitlist:', email);
  
  if (!db) {
    console.error('Firestore not initialized');
    throw new Error('Service unavailable. Please try again later.');
  }

  try {
    // Check for existing email
    const waitlistRef = collection(db, 'waitlist');
    const q = query(waitlistRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log('Email already exists in waitlist');
      throw new Error('This email is already on the waitlist.');
    }

    // Add new entry
    const entry: WaitlistEntry = {
      email,
      source: 'podcastbots.ai',
      signupDate: serverTimestamp(),
      lastLogin: serverTimestamp()
    };

    const docRef = await addDoc(waitlistRef, entry);
    console.log('Successfully added to waitlist with ID:', docRef.id);

  } catch (error) {
    console.error('Error in addToWaitlist:', error);
    if (error instanceof Error) {
      throw error; // Re-throw if it's already our error
    }
    throw new Error('Failed to join waitlist. Please try again.');
  }
};
