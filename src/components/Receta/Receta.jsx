import React from "react";
import { Link } from "react-router-dom";

export const Receta = () => {
  return (
    <div>
      <Link to="/tienda">Volver</Link>
      <h1>Receta</h1>
      <h3>Doctor/a:</h3>
      <input type="text" />
      <h3>Od</h3>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <h3>Oi</h3>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
};
