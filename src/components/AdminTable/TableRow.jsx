export default function TableRow({ nombre, email, mensaje }) {
  return (
    <div className="table-row">
      <p>
        <span>
          Nombre <br />{" "}
        </span>
        {nombre}
      </p>
      <p>
        <span>
          e-mail <br />
        </span>
        {email}
      </p>
      {mensaje && (
        <p>
          <span>Mensaje: </span> <br />
          {mensaje}
        </p>
      )}
    </div>
  );
}
