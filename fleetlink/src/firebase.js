import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA-kHniD3gLfqNFQR90Mq8g_RIv7yvMpS4",
  authDomain: "fleetlink-cdf4c.firebaseapp.com",
  projectId: "fleetlink-cdf4c",
  storageBucket: "fleetlink-cdf4c.appspot.com",
  messagingSenderId: "888115434586",
  appId: "1:888115434586:web:76c9a55c8dd0cf617e3463"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);