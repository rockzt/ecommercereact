// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9yz4AWc99mzXatbcWMx8oVilcLIK_kkg",
  authDomain: "ecommerce49900-6e2ca.firebaseapp.com",
  projectId: "ecommerce49900-6e2ca",
  storageBucket: "ecommerce49900-6e2ca.appspot.com",
  messagingSenderId: "619182940721",
  appId: "1:619182940721:web:5065c7a3d0fd373ea42b10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
