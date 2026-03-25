// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6FZ142x-0xH3tdEj0FqoIKqR8CORzC6U",
  authDomain: "pradeep-portfolio-89adf.firebaseapp.com",
  projectId: "pradeep-portfolio-89adf",
  storageBucket: "pradeep-portfolio-89adf.firebasestorage.app",
  messagingSenderId: "133373115126",
  appId: "1:133373115126:web:d06097f3af14425dc00ad7",
  measurementId: "G-EM445F1LVJ"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
