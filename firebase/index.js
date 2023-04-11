// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKMdpTibjfPlI9IW1BKZ4TyN8yBiL7I3s",
  authDomain: "ds151-7a190.firebaseapp.com",
  projectId: "ds151-7a190",
  storageBucket: "ds151-7a190.appspot.com",
  messagingSenderId: "352676628255",
  appId: "1:352676628255:web:ae80bd2fd0809463a2122a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDoc, getDocs };
