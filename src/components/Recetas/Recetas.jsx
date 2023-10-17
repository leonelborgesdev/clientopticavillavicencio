import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Recetas = () => {
  //   const { recipes } = useSelector((state) => state);
  const recipes = useSelector((state) => state.recipes);
  return (
    <div>
      <Link to={"/tienda"}>Volver</Link>
      <h2>Recetas</h2>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((receta, index) => {
            return <div key={index}></div>;
          })}
        </tbody>
      </table>
    </div>
  );
};
