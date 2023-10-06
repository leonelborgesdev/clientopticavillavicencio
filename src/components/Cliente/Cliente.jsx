import React, { useState } from "react";

export const Cliente = () => {
  const [cliente, setCliente] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };
  return (
    <div>
      <h1>Registrar Cliente</h1>
      <h3>Nommbre:</h3>
      <input type="text" name="nombre" onChange={handleChange} />
      <h3>Cel/Telf:</h3>
      <input type="text" name="celular" onChange={handleChange} />
    </div>
  );
};
