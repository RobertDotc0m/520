import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Formulario({ data, setData, dataFilter, SetDataFilter }) {
  const [datosColaboradores, setDatosColaboradores] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const handleInput = (e) => {
    const inputId = {
      inputNombre: "nombre",
      inputCorreo: "correo",
      inputEdad: "edad",
      inputCargo: "cargo",
      inputTeledono: "telefono",
    };
    const ojoConLosInput = inputId[e.target.id];
    if (ojoConLosInput) {
      setDatosColaboradores({
        ...datosColaboradores,
        [ojoConLosInput]: e.target.value,
      });
    }
  };

  const DatosValidados = (e) => e.preventDeFault();
  const { nombre, correo, edad, cargo, telefono } = datosColaboradores;

  return (
    <>
      <form className="from">
        <div>
          <h3>Agregar Colaborador</h3>
          <Form.Control
            size="lg"
            type="text"
            placeholder="nombre del colaborador"
            id="inputNombre"
            value=""
            onChange={handleInput}
          />
          <br />
          <Form.Control
            size="lg"
            type="text"
            placeholder="email del colaborador"
            id="inputEmail"
            value=""
            onChange={handleInput}
          />
          <br />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Edad del colaborador"
            id="inputEdad"
            value=""
            onChange={handleInput}
          />
          <br />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Cargo del colaborador"
            id="inputCargo"
            value=""
            onChange={handleInput}
          />
          <br />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Telefono del colaborador"
            id="inputTelefono"
            value=""
            onChange={handleInput}
          />
          <br />
          <Button variant="success">Agregar Colaborador </Button>{" "}
        </div>
      </form>
    </>
  );
}

export default Formulario;
