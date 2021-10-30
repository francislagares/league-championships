import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDcIFQsFzDuAOzm3s2os8NX9mxVkBllenU',
  authDomain: 'league-championships.firebaseapp.com',
  projectId: 'league-championships',
  storageBucket: 'league-championships.appspot.com',
  messagingSenderId: '675690295762',
  appId: '1:675690295762:web:a3637b2febcc2da9ab180b',
  measurementId: 'G-26QKLN4669',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
