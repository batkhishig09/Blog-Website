// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "batkhishig-blog.firebaseapp.com",
  projectId: "batkhishig-blog",
  storageBucket: "batkhishig-blog.appspot.com",
  messagingSenderId: "1072569567885",
  appId: "1:1072569567885:web:ef0344041a0903a3e6b0c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);