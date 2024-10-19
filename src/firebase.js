// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = { //add your own firebase configuration
  apiKey: "AIzaSyDkGpmzdZCIIJMEfTyeYgB2TGP37QjtGdA",
  authDomain: "event-management-page-85529.firebaseapp.com",
  projectId: "event-management-page-85529",
  storageBucket: "event-management-page-85529.appspot.com",
  messagingSenderId: "971132836419",
  appId: "1:971132836419:web:6e73391df8b7ce0c98d2f6",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
