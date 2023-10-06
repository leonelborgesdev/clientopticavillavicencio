import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setClientObj } from "../../store/slices/client";

export const ReservarCita = () => {
  const [cliente, setCliente] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCliente({ ...cliente, [name]: value });
  };

  const handleReservar = () => {
    dispatch(setClientObj(cliente));
  };
  return (
    <div>
      <Link to={"/"}>Volver</Link>
      <h1>Reservar Cita</h1>
      <div>
        <h2>Cliente</h2>
        <div>
          <h4>Nombre:</h4>
          <input type="text" name="nombre" onChange={handleChange} />
          <h4>Cel/Tel:</h4>
          <input type="text" name="celular" onChange={handleChange} />
        </div>
      </div>
      <div>
        <h2>Cita</h2>
        <h4>Fecha:</h4>
        <input type="text" />
        <h4>Hora:</h4>
        <input type="text" />
      </div>
      <button onClick={() => handleReservar()}>Guardar</button>
    </div>
  );
};
