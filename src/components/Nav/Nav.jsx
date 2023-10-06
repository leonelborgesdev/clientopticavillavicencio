import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="container_nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/tienda"}>Tienda</Link>
      <Link to={"/citas"}>Citas</Link>
      <Link to={"/cita"}>Reservar Cita</Link>
    </div>
  );
};
