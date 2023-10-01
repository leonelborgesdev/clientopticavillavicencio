import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/tienda"}>Tienda</Link>
      <Link to={"/cita"}>Reservar Cita</Link>
    </div>
  );
};
