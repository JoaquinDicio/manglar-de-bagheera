import { collection, addDoc } from "firebase/firestore";
import { db } from "../db/fireabase.config";

export default async function addLeads(nombre, email, mensaje) {
  try {
    validate(nombre, email, mensaje);
    await addDoc(collection(db, "leads"), {
      nombre: nombre,
      email: email,
      mensaje: mensaje,
      timestamp: new Date(),
    });
    console.log("200");
  } catch (e) {
    throw new Error(e);
  }
}
function validate(nombre, email, mensaje) {
  if (nombre.trim() == "" || email.trim() == "")
    throw new Error("Complete todos los campos");
  if (!email.split("").includes("@")) throw new Error("Email invalido");
}
