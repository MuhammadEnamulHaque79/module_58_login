// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXsJWnstF_tSIz0rHr4cYDdI2rLMo9Kso",
  authDomain: "my-first-firebase-projec-e63df.firebaseapp.com",
  projectId: "my-first-firebase-projec-e63df",
  storageBucket: "my-first-firebase-projec-e63df.appspot.com",
  messagingSenderId: "319551538179",
  appId: "1:319551538179:web:d88ab32405c0dc8ebe3a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
