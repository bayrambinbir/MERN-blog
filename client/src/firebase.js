// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d550c.firebaseapp.com",
  projectId: "mern-blog-d550c",
  storageBucket: "mern-blog-d550c.appspot.com",
  messagingSenderId: "862495441869",
  appId: "1:862495441869:web:c28aacca393dbcbc1e7a84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);