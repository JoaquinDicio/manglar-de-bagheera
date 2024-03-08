import { db } from "../db/fireabase.config.js";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

export default async function getLeads() {
  try {
    // Crear una consulta que filtre por timestamp y ordene en orden descendente
    const q = query(collection(db, "leads"), orderBy("timestamp", "desc"));

    // Ejecutar la consulta
    const snapshot = await getDocs(q);

    // Procesar los resultados
    const leads = [];
    snapshot.forEach((doc) => leads.push({ id: doc.id, ...doc.data() }));

    return leads;
  } catch (err) {
    throw new Error("Error al leer la base de datos");
  }
}
