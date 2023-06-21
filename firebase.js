// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { FIREBASE_KEY } from '@env';
import Constants from 'expo-constants';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.firebaseKey,
  authDomain: "villagesports-ed274.firebaseapp.com",
  projectId: "villagesports-ed274",
  storageBucket: "villagesports-ed274.appspot.com",
  messagingSenderId: "899669696347",
  appId: "1:899669696347:web:d9a05fe06e58440a19047e",
  measurementId: "G-HPFTCQ4MQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
