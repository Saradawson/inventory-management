
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBimyjMUlVdhCqq5_-fjR_UygWuC84Psro",
  authDomain: "inventory-management-f6a73.firebaseapp.com",
  projectId: "inventory-management-f6a73",
  storageBucket: "inventory-management-f6a73.appspot.com",
  messagingSenderId: "1055428789451",
  appId: "1:1055428789451:web:2bdfb6a3c1355edcd6074e",
  measurementId: "G-4FLEYN92ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};