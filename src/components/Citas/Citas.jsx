import React from "react";
import { Nav } from "../Nav/Nav";
import { useSelector } from "react-redux";

export const Citas = () => {
  const appointments = useSelector((state) => state.appointments);
  return (
    <div>
      <Nav />
      <h2>Citas</h2>
      {appointments.length > 0 && (
        <table className="table table-stripe">
          <thead>
            <tr>
              <th>Nro</th>
              <th>Nombre</th>
              <th>Celular</th>
              <th>Hora</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.id_cliente.nombre}</td>
                  <td>{appointment.id_cliente.celular}</td>
                  <td>{appointment.hora}</td>
                  <td>{appointment.fecha}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
