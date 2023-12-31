import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setClientObj } from "../../store/slices/client";
import { setRecipeObj } from "../../store/slices/recipe";
import { getAllClients } from "../../store/slices/customers";
import { getAllRecipes } from "../../store/slices/recipes";
import "./Clientes.css";

export const Clientes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllClients());
    dispatch(getAllRecipes());
  }, []);
  const customers = useSelector((state) => state.customers.list);
  const client = useSelector((state) => state.client);
  const recipes = useSelector((state) => state.recipes.list);
  const handleSelecClient = (cliente) => {
    dispatch(setClientObj(cliente));
    let fecha_mayor = new Date("01/01/1024");
    dispatch(setRecipeObj({}));
    if (recipes.length > 0)
      recipes.map((recipe) => {
        console.log("recipe", recipe);
        if (
          recipe.ClienteId === cliente.id &&
          new Date(recipe.fecha) > fecha_mayor
        ) {
          fecha_mayor = new Date(recipe.fecha);
          dispatch(setRecipeObj(recipe));
        }
      });
    navigate("/tienda");
  };
  return (
    <div>
      <Link to={"/tienda"}>Volver</Link>
      <h1>Clientes</h1>
      <div className="container_lista_clientes">
        <h3>Nombre</h3>
        <input type="text" />
        <button
          onClick={() => {
            navigate("/cliente");
          }}
        >
          Registrar Cliente
        </button>
      </div>
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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.celular}</td>
                <td>
                  <input
                    type="radio"
                    name="client"
                    defaultChecked={client.obj.id === cliente.id ? true : false}
                    value={cliente.id}
                    onClick={() => handleSelecClient(cliente)}
                  />
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
