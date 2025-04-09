// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "saurabh-659ed.firebaseapp.com",
  projectId: "saurabh-659ed",
  storageBucket: "saurabh-659ed.firebasestorage.app",
  messagingSenderId: "617532142942",
  appId: "1:617532142942:web:7cfdad19b15aead466cbcf",
  measurementId: "G-YBZLVBNNKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);