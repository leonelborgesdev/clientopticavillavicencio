import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAddClient } from "../../store/slices/client";
import { v4 as uuid } from "uuid";
import { fetchAddAppointment } from "../../store/slices/appointments";

export const ReservarCita = () => {
  const [cliente, setCliente] = useState({ id: uuid() });
  const [appointment, setAppointment] = useState({
    id: uuid(),
    ClienteId: cliente.id,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };
  const handleChangeAppointment = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };
  const handleReservar = async () => {
    await dispatch(fetchAddClient(cliente));
    // appointment["id_cliente"] = cliente.id;
    dispatch(fetchAddAppointment(appointment));
    navigate("/");
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
        <input type="text" name="fecha" onChange={handleChangeAppointment} />
        <h4>Hora:</h4>
        <input type="text" name="hora" onChange={handleChangeAppointment} />
      </div>
      <button onClick={() => handleReservar()}>Guardar</button>
    </div>
  );
};
