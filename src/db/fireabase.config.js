// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqFOsrNRokx0jLLxC64hfNiDlNquE8goE",
  authDomain: "manglar-funnel.firebaseapp.com",
  projectId: "manglar-funnel",
  storageBucket: "manglar-funnel.appspot.com",
  messagingSenderId: "1004624011101",
  appId: "1:1004624011101:web:c3612f0345676b05b792b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
