import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebaseConfig.js";
import {
  setDoc,
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";

export async function uploadPrize(prize, file) {
  try {
    const storageRef = ref(storage, `screenshots/${prize.code}`);
    await uploadBytes(storageRef, file);

    const imageUrl = await getDownloadURL(storageRef);

    const prizeRef = doc(db, "prizes", prize.code);
    await setDoc(prizeRef, {
      ...prize,
      imageUrl,
    });
  } catch (e) {
    console.log("Error al guardar los datos:", e);
  }
}

export async function getPrizeByCode(code) {
  try {
    const prizeRef = doc(db, "prizes", code);
    const prizeDoc = await getDoc(prizeRef);
    return prizeDoc.exists() ? { id: prizeDoc.id, ...prizeDoc.data() } : null;
  } catch (e) {
    console.log("Error obteniendo el documento:", e);
  }
}

export async function verifyEmailIsAvailable(email) {
  try {
    const emailQuery = query(
      collection(db, "prizes"),
      where("email", "==", email)
    );
    const snapshot = await getDocs(emailQuery);
    console.log(snapshot);
    return snapshot.empty;
  } catch (e) {
    console.log("Error verificando el email:", e);
  }
}

export async function markAsUsed(prize) {
  //deberia marcar el codigo como utilizado y borrar la imagen del storage para no ocupar almacenamiento al pedo
  try {
    const prizeRef = doc(db, "prizes", prize.code);
    await setDoc(prizeRef, {
      ...prize,
      used: true,
    });
  } catch (e) {
    console.log("Error al guardar los datos:", e);
  }
}
