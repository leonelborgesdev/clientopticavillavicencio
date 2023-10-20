import React, { useEffect } from "react";
import { Nav } from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../store/slices/appointments";

export const Citas = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointments());
  }, []);
  const appointments = useSelector((state) => state.appointments.list);
  return (
    <div>
      <Nav />
      <h2>Citas</h2>
      {appointments.length > 0 && (
        <table className="table table-striped">
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
                  <td>{appointment.Cliente.nombre}</td>
                  <td>{appointment.Cliente.celular}</td>
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
