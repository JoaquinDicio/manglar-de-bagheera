import { useState } from "react";
import "./AdminTable.css";
import bcrypt from "bcryptjs";
import getLeads from "../../utils/getLeads";
import TableRow from "./TableRow";

export default function AdminTable() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState(null);

  async function checkPassword() {
    const hash = "$2a$10$yBz8g7rxYigLug3PGHiRAeRX7QnKtNReyfFPFswa5aOg2sfjBEvhe";
    const result = bcrypt.compareSync(password, hash);
    if (result) {
      await fetchData();
      setAuth(true);
    } else {
      alert("Contraseña incorrecta");
    }
  }

  async function fetchData() {
    try {
      const leads = await getLeads();
      setLeads(leads);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      {!auth ? (
        <div className="d-flex auth align-items-center">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
          <button onClick={() => checkPassword()} className="dashboard">
            Ver datos
          </button>
        </div>
      ) : (
        <div className="data-container">
          {leads?.map((lead) => (
            <TableRow key={lead.id} {...lead} />
          ))}
        </div>
      )}
    </>
  );
}
