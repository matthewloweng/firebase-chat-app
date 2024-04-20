// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// apikey = import.meta.env.VITE_API_KEY
console.log('API Key:', import.meta.env.VITE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mloweng-react-chat-app.firebaseapp.com",
  projectId: "mloweng-react-chat-app",
  storageBucket: "mloweng-react-chat-app.appspot.com",
  messagingSenderId: "19886352884",
  appId: "1:19886352884:web:1522e68e1ea33c5dce71a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();