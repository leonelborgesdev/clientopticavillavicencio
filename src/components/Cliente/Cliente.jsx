import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAddClient } from "../../store/slices/client";
import { v4 as uuid } from "uuid";

export const Cliente = () => {
  const [cliente, setCliente] = useState({ id: uuid() });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };
  const handleSave = () => {
    dispatch(fetchAddClient(cliente));
    navigate("/");
  };
  return (
    <div>
      <Link to="/">Volver</Link>
      <h1>Registrar Cliente</h1>
      <h3>Nommbre:</h3>
      <input type="text" name="nombre" onChange={handleChange} />
      <h3>Cel/Telf:</h3>
      <input type="text" name="celular" onChange={handleChange} />
      <button onClick={() => handleSave()}>Guardar</button>
    </div>
  );
};
