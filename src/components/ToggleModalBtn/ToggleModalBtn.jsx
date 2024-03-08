import { useState } from "react";
import Modal from "../Modal/Modal";
import "./ToggleModalBtn.css";

export default function toggleModalBtn({ text }) {
  const [showModal, setShowModal] = useState(false);
  function handleClick() {
    setShowModal(!showModal);
  }
  return (
    <>
      <button className="toggle-modal" onClick={handleClick}>
        {text}
      </button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}
