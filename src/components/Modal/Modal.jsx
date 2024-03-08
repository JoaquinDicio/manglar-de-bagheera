import { useState } from "react";
import "./Modal.css";
import addLeads from "../../utils/addLeads.js";

export default function Modal({ setShowModal }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    error: false,
    success: false,
    loading: false,
  });
  const { nombre, email, mensaje, error, success, loading } = formData;

  async function handleSubmit(e) {
    e.preventDefault();
    if (success || loading) return;
    try {
      handleFormChange(true, "loading");
      await addLeads(nombre, email, mensaje);
      handleFormChange(true, "success");
      handleFormChange(false, "error");
    } catch (err) {
      handleFormChange(err.message, "error");
    } finally {
      handleFormChange(false, "loading");
    }
  }

  function handleFormChange(value, key) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="modal-container d-flex justify-content-center align-items-center">
      <form className="d-flex align-items-center flex-column animate__animated animate__fadeInUpBig">
        <p>Completa el formulario</p>
        <input
          type="text"
          value={nombre}
          name="nombre"
          onChange={(e) => handleFormChange(e.target.value, "nombre")}
          placeholder="Nombre"
        />
        <input
          type="email"
          placeholder="e-mail"
          name="email"
          value={email}
          onChange={(e) => handleFormChange(e.target.value, "email")}
        />
        <input
          type="text"
          placeholder="Mensaje (opcional)"
          name="mensaje"
          value={mensaje}
          onChange={(e) => handleFormChange(e.target.value, "mensaje")}
        />
        {error && <i className="error">{error}</i>}
        <button className="submit" onClick={(e) => handleSubmit(e)}>
          {loading ? "ENVIANDO..." : success ? "ENVIADO " : "QUIERO MI EVENTO"}
        </button>
        <button
          className="cancel"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
