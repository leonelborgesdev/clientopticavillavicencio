import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setClientObj } from "../../store/slices/client";
import { setRecipeObj } from "../../store/slices/recipe";

export const Clientes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.customers);
  const client = useSelector((state) => state.client);
  const recipes = useSelector((state) => state.recipes);
  const handleSelecClient = (cliente) => {
    dispatch(setClientObj(cliente));
    const fecha_mayor = new Date("01/01/1024");
    dispatch(setRecipeObj({}));
    recipes.map((recipe) => {
      console.log(recipe);
      if (
        recipe.id_client === cliente.id &&
        new Date(recipe.fecha) > fecha_mayor
      ) {
        dispatch(setRecipeObj(recipe));
      }
    });
    navigate("/tienda");
  };
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
