// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';

import firebase from "firebase/compat/app";
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ETPBNgIdKXS7jMxl8iKy4lc-ew8TAjg",
  authDomain: "hackbnglr.firebaseapp.com",
  projectId: "hackbnglr",
  storageBucket: "hackbnglr.appspot.com",
  messagingSenderId: "680890518077",
  appId: "1:680890518077:web:5606a185bc40395fe67854",
  measurementId: "G-V0QR05LC2G"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app