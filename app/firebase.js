// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE-LA3QzHj4byPFxXt11eBbpFWPsUrZnY",
  authDomain: "tickets-app-bfd8f.firebaseapp.com",
  projectId: "tickets-app-bfd8f",
  storageBucket: "tickets-app-bfd8f.appspot.com",
  messagingSenderId: "256897486815",
  appId: "1:256897486815:web:af71135c1aca7b8248fe6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
