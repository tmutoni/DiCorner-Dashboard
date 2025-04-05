// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVH6iRMNd-92t8oOIRuYcigNIaPFSdGFM",
  authDomain: "dicorner-dash.firebaseapp.com",
  databaseURL: "https://dicorner-dash-default-rtdb.firebaseio.com",
  projectId: "dicorner-dash",
  storageBucket: "dicorner-dash.firebasestorage.app",
  messagingSenderId: "611866900293",
  appId: "1:611866900293:web:62a5a3cc8acc52a0b0702c",
  measurementId: "G-B4JHF0J3GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
