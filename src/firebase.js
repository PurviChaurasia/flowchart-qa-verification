// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbX-x7wlTvfwdU1l5IbQRKhOqo3b8Rtn8",
  authDomain: "flowchart-qa-verification.firebaseapp.com",
  databaseURL: "https://flowchart-qa-verification-default-rtdb.firebaseio.com",
  projectId: "flowchart-qa-verification",
  storageBucket: "flowchart-qa-verification.appspot.com",
  messagingSenderId: "937000389632",
  appId: "1:937000389632:web:1cedfb2b969ea57f405ce5",
  measurementId: "G-Z9YV9B7WPJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);