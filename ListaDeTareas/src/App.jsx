import React, { useState } from "react";
import "./App.css";
import Buscador from "./assets/componentes/Buscador";
import Formulario from "./assets/componentes/Formulario";
import Listado from "./assets/componentes/Listado";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { baseColaboradores } from "./assets/baseColaboradores";
import { Alert } from "./assets/componentes/Alert";

function App() {
  const [data, setData] = useState(baseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);

  return (
    <>
      <h1 className="App-title">
        <FontAwesomeIcon icon={faUserGroup} />
        Lista de colaboradores
      </h1>
      <Buscador data={data} dataFilter={setDataFilter} />
      <Listado
        data={data}
        setData={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
      />
      <Formulario />
      <Alert />
    </>
  );
}

export default App;
