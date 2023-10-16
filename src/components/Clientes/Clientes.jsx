import React from "react";
import { useSelector } from "react-redux";

export const Clientes = () => {
  const customers = useSelector((state) => state.customers);
  return (
    <div>
      <h1>Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Boton</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cliente) => {
            return (
              <tr>
                <td></td>
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
