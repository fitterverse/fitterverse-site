import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBe3M5YNX9IyRYxJH5OLw_wj0xWQa5JZgs",
  authDomain: "fitterverse-f2885.firebaseapp.com",
  projectId: "fitterverse-f2885",
  storageBucket: "fitterverse-f2885.firebasestorage.app",
  messagingSenderId: "178485188502",
  appId: "1:178485188502:web:f471028a4fbf3a956defb7"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add these two lines to fix the Auth.tsx import error:
export const auth = getAuth(app);
export const db = getFirestore(app);
