// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5kZO8MSrZpezD32Qjkj4_AdQpN7zb_pY",
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