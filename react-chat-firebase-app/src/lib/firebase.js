// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmZ9TQe5H85beTz9TpIA9nLWUvF9YNZZk",
  authDomain: "react-chat-ce029.firebaseapp.com",
  projectId: "react-chat-ce029",
  storageBucket: "react-chat-ce029.appspot.com",
  messagingSenderId: "351434082742",
  appId: "1:351434082742:web:ff9e3330be88d6b8ad9917",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
