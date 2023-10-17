import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Recetas.css";
import { setRecipeObj } from "../../store/slices/recipe";
import { setClientObj } from "../../store/slices/client";

export const Recetas = () => {
  //   const { recipes } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const handleSelecc = (receta) => {
    dispatch(setRecipeObj(receta));
    dispatch(setClientObj(receta.client));
    navigate("/tienda");
  };
  return (
    <div>
      <Link to={"/tienda"}>Volver</Link>
      <h2>Recetas</h2>
      <div className="container_receta_cliente">
        <h4>Cliente</h4>
        <input type="text" />
        <button>Buscar</button>
        <button onClick={() => navigate("/receta")}>Nueva Receta</button>
      </div>
      <table border={"1px"} className="table table-hover">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Cliente</th>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((receta, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{receta.client.nombre}</td>
                <td>{receta.doctor}</td>
                <td>{receta.fecha}</td>
                <td>
                  <input
                    type="radio"
                    name="recipe"
                    onClick={() => handleSelecc(receta)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
