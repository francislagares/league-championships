import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection /* setDoc, doc */ } from 'firebase/firestore';

// import { cityDb } from 'data/m-city-export';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export const matchesCollection = collection(DB, 'matches');
export const playersCollection = collection(DB, 'players');
export const positionsCollection = collection(DB, 'positions');
export const promotionsCollection = collection(DB, 'promotions');
export const teamsCollection = collection(DB, 'teams');

export const auth = getAuth(app);
// This will seed Firestore on yarn start
// Make sure to comment out after is seeded
/* cityDb.matches.forEach(match => {
  setDoc(doc(matchesCollection), match);
});

cityDb.players.forEach(player => {
  setDoc(doc(playersCollection), player);
});

cityDb.positions.forEach(position => {
  setDoc(doc(positionsCollection), position);
});

cityDb.promotions.forEach(promotion => {
  setDoc(doc(promotionsCollection), promotion);
});

cityDb.teams.forEach(team => {
  setDoc(doc(teamsCollection), team);
}); */
