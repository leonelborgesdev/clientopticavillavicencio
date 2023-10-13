import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Receta.css";
import { setRecipeList } from "../../store/slices/recipes";
import { setRecipeObj } from "../../store/slices/recipe";

export const Receta = () => {
  const client = useSelector((state) => state.client);
  const [recipe, setRecipe] = useState({ id_client: client.obj.id });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
    console.log(recipe);
  };
  const handleSave = () => {
    // setRecipe({ ...recipe, ["id_client"]: client.obj.id });
    console.log(recipe);
    dispatch(setRecipeObj(recipe));
    dispatch(setRecipeList(recipe));
    navigate("/tienda");
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/tienda">Tienda</Link>
      <div className="container_recipe_client">
        <h1>Cliente</h1>
        <div className="dates_recipe_cliente">
          <h3>Nombre:</h3>
          <h3>{client.obj.nombre}</h3>
          <h3>Tel/Cel.:</h3>
          <h3>{client.obj.celular}</h3>
        </div>
      </div>
      <div>
        <h1>Receta</h1>
        <div className="container_datos_receta">
          <div>
            <h3>Doctor/a:</h3>
            <input type="text" name="doctor" onChange={handleChange} />
          </div>
          <div>
            <h3>Fecha:</h3>
            <input type="text" name="fecha" onChange={handleChange} />
          </div>
        </div>
        <h3>Lejos</h3>
        <h3>Od</h3>
        <span>Esf.</span>
        <input type="text" name="esf_od_lejos" onChange={handleChange} />
        <span>Cil.</span>
        <input type="text" name="cil_od_lejos" onChange={handleChange} />
        <span>Eje.</span>
        <input type="text" name="eje_od_lejos" onChange={handleChange} />
        <h3>Oi</h3>
        <span>Esf.</span>
        <input type="text" name="esf_oi_lejos" onChange={handleChange} />
        <span>Cil.</span>
        <input type="text" name="cil_oi_lejos" onChange={handleChange} />
        <span>Eje.</span>
        <input type="text" name="eje_oi_lejos" onChange={handleChange} />

        <h3>Cerca</h3>

        <span>ADD.</span>
        <input type="text" name="add_cerca" onChange={handleChange} />
        <h3>Od</h3>
        <span>Esf.</span>
        <input type="text" name="esf_od_cerca" onChange={handleChange} />
        <span>Cil.</span>
        <input type="text" name="cil_od_cerca" onChange={handleChange} />
        <span>Eje.</span>
        <input type="text" name="eje_od_cerca" onChange={handleChange} />
        <h3>Oi</h3>
        <span>Esf.</span>
        <input type="text" name="esf_oi_cerca" onChange={handleChange} />
        <span>Cil.</span>
        <input type="text" name="cil_oi_cerca" onChange={handleChange} />
        <span>Eje.</span>
        <input type="text" name="eje_oi_cerca" onChange={handleChange} />
        <button onClick={() => handleSave()}>Guardar</button>
      </div>
    </div>
  );
};
