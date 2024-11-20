/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5upSQxCpmohM_9nkeJQty9J4TuIqcYos",
  authDomain: "movieai-3a763.firebaseapp.com",
  projectId: "movieai-3a763",
  storageBucket: "movieai-3a763.firebasestorage.app",
  messagingSenderId: "507590209446",
  appId: "1:507590209446:web:f1d76f555d597815f2e967",
  measurementId: "G-PE5976CG6L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
