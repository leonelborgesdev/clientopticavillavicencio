import React from "react";

export const ReservarCita = () => {
  return (
    <div>
      <h1>Reservar Cita</h1>
      <div>
        <h2>Cliente</h2>
        <div>
          <h4>Nombre:</h4>
          <input type="text" />
          <h4>Cel/Tel:</h4>
          <input type="text" />
        </div>
      </div>
      <div>
        <h2>Cita</h2>
        <h4>Fecha:</h4>
        <input type="text" />
        <h4>Hora:</h4>
        <input type="text" />
      </div>
    </div>
  );
};
