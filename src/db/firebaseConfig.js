import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxkaPJ72GF0QANOxrNVQmRpNA-qtHOR9I",
  authDomain: "embudo-e640c.firebaseapp.com",
  projectId: "embudo-e640c",
  storageBucket: "embudo-e640c.appspot.com",
  messagingSenderId: "1068722723305",
  appId: "1:1068722723305:web:55007859a39db87be89378",
  measurementId: "G-CH96J38YY3",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
