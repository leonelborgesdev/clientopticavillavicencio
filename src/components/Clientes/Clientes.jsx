import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Clientes = () => {
  const customers = useSelector((state) => state.customers);
  return (
    <div>
      <Link to={"/tienda"}>Volver</Link>
      <h1>Clientes</h1>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nro</th>
            <th scope="col">Nombre</th>
            <th scope="col">Celular</th>
            <th scope="col">Boton</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cliente, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.celular}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
