import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAQ2PAdBQayKlalSnJDq30RVTY4Up5PtOo",
    authDomain: "flowchart-qc.firebaseapp.com",
    databaseURL: "https://flowchart-qc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "flowchart-qc",
    storageBucket: "flowchart-qc.appspot.com",
    messagingSenderId: "485452533948",
    appId: "1:485452533948:web:34c4b2785f63e3b97700b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
