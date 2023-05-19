// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn1jlqPSfiLrKAR3ifp_HWfblSEsBShfg",
  authDomain: "reactpro1-d893c.firebaseapp.com",
  projectId: "reactpro1-d893c",
  storageBucket: "reactpro1-d893c.appspot.com",
  messagingSenderId: "1069705339917",
  appId: "1:1069705339917:web:4951ca0e8dbcc58ccfa144"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
