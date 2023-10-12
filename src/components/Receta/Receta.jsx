import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Receta = () => {
  const client = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/tienda");
  };
  return (
    <div>
      <Link to="/tienda">Volver</Link>
      <div>
        <h1>Cliente</h1>
        <h3>Nombre:</h3>
        <h3>{client.obj.nombre}</h3>
        <h3>Tel/Cel.:</h3>
        <h3>{client.obj.nombre}</h3>
      </div>
      <div>
        <h1>Receta</h1>
        <h3>Doctor/a:</h3>
        <input type="text" />
        <h3>Lejos</h3>
        <h3>Od</h3>
        <span>Esf.</span>
        <input type="text" />
        <span>Cil.</span>
        <input type="text" />
        <span>Eje.</span>
        <input type="text" />
        <h3>Oi</h3>
        <span>Esf.</span>
        <input type="text" />
        <span>Cil.</span>
        <input type="text" />
        <span>Eje.</span>
        <input type="text" />

        <h3>Cerca</h3>

        <span>ADD.</span>
        <input type="text" />
        <h3>Od</h3>
        <span>Esf.</span>
        <input type="text" />
        <span>Cil.</span>
        <input type="text" />
        <span>Eje.</span>
        <input type="text" />
        <h3>Oi</h3>
        <span>Esf.</span>
        <input type="text" />
        <span>Cil.</span>
        <input type="text" />
        <span>Eje.</span>
        <input type="text" />
        <button onClick={() => handleSave()}>Guardar</button>
      </div>
    </div>
  );
};
