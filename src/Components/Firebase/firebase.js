// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRi5dMSBVjqJnz_oKZ835ocXI2HW1UjC4",
  authDomain: "react-demonstration-work.firebaseapp.com",
  databaseURL: "https://react-demonstration-work-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-demonstration-work",
  storageBucket: "react-demonstration-work.appspot.com",
  messagingSenderId: "1087834321374",
  appId: "1:1087834321374:web:5c7a69d9de74ca4a9d2d4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);