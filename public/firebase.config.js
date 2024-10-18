// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxkaPJ72GF0QANOxrNVQmRpNA-qtHOR9I",
  authDomain: "embudo-e640c.firebaseapp.com",
  projectId: "embudo-e640c",
  storageBucket: "embudo-e640c.appspot.com",
  messagingSenderId: "1068722723305",
  appId: "1:1068722723305:web:55007859a39db87be89378",
  measurementId: "G-CH96J38YY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
