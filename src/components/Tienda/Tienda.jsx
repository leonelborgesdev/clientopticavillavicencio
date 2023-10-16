import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Tienda.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteItemlist } from "../../store/slices/itemCar";
import { setCarObj } from "../../store/slices/Car";

const tabla_cerca = (recipe) => {
  return (
    <table border={"1px"} className="table table-striped">
      <thead>
        <tr>
          <th></th>
          <th>Esf.</th>
          <th>Cil.</th>
          <th>Eje</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Od.</td>
          <td>{recipe.obj.esf_od_cerca}</td>
          <td>{recipe.obj.cil_od_cerca}</td>
          <td>{recipe.obj.eje_od_cerca}</td>
        </tr>
        <tr>
          <td>Oi.</td>
          <td>{recipe.obj.esf_oi_cerca}</td>
          <td>{recipe.obj.cil_oi_cerca}</td>
          <td>{recipe.obj.eje_oi_cerca}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const Tienda = () => {
  const products = useSelector((state) => state.products);
  const itemCar = useSelector((state) => state.itemCar);
  const client = useSelector((state) => state.client);
  const recipe = useSelector((state) => state.recipe);
  const car = useSelector((state) => state.car);
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [tipoDescuento, setTipoDescuento] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelEliminar = (posicion, precioItem) => {
    dispatch(deleteItemlist(posicion));
    dispatch(setCarObj({ ...car.obj, ["suma"]: car.obj.suma - precioItem }));
  };
  const handleChangeDiscount = (e) => {
    const { value } = e.target;
    dispatch(setCarObj({ ...car.obj, ["descuento"]: value }));
  };
  const handeltipoDescuento = () => {
    if (tipoDescuento) {
      setTipoDescuento(false);
      dispatch(setCarObj({ ...car.obj, ["tipo_descuento"]: "n" }));
    } else {
      setTipoDescuento(true);
      dispatch(setCarObj({ ...car.obj, ["tipo_descuento"]: "%" }));
    }
  };
  const handleCarVisible = () => {
    if (carritoVisible) {
      setCarritoVisible(false);
    } else {
      setCarritoVisible(true);
    }
  };
  return (
    <div>
      <div className="container_nav_tienda">
        <Link to="/">Volver</Link>
        <h3>Orden</h3>
        <select name="orden">
          <option value="">Ascendente</option>
          <option value="">Descendente</option>
        </select>
        <h3>Buscar</h3>
        <select name="select">
          <option value="">Descripcion</option>
          <option value="">Categoria</option>
          <option value="">Marca</option>
          <option value="">Precio</option>
        </select>
        <input type="text" />
        <button>Buscar</button>
        <h2 className="icono_carrito" onClick={handleCarVisible}>
          Carrito: {itemCar.list.length}
        </h2>
      </div>
      {/* {itemCar.list.length > 0 && ( */}
      {carritoVisible && itemCar.list.length > 0 && (
        <div
          className="container_carrito"
          id={carritoVisible === true ? "carritoVisible" : "carritoNoVisible"}
        >
          <div className="container_carrito_cliente">
            <h3>Nombre:</h3>
            <h3>{client.obj.nombre ? client.obj.nombre : "--"}</h3>
            <h3>Cel/Telf:</h3>
            <h3>{client.obj.celular ? client.obj.celular : "--"}</h3>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/clientes");
              }}
            >
              Buscar Cliente
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                navigate("/receta");
              }}
            >
              Receta
            </button>
          </div>
          {Object.keys(recipe.obj).length > 0 && (
            <div className="container_carrito_receta">
              <h3>Receta:</h3>
              <div className="container_carrito_receta_doc">
                <h3>Doctor:</h3>
                <h3>{recipe.obj.doctor}</h3>
                <h3>Fecha:</h3>
                <h3>{recipe.obj.fecha}</h3>
              </div>
              <h4>Lejos:</h4>
              <table border={"1px"} className="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>Esf.</th>
                    <th>Cil.</th>
                    <th>Eje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Od.</td>
                    <td>{recipe.obj.esf_od_lejos}</td>
                    <td>{recipe.obj.cil_od_lejos}</td>
                    <td>{recipe.obj.eje_od_lejos}</td>
                  </tr>
                  <tr>
                    <td>Oi.</td>
                    <td>{recipe.obj.esf_oi_lejos}</td>
                    <td>{recipe.obj.cil_oi_lejos}</td>
                    <td>{recipe.obj.eje_oi_lejos}</td>
                  </tr>
                </tbody>
              </table>
              <div className="container_receta_datos_cerca">
                <div>
                  <h4>Cerca:</h4>
                </div>
                {recipe.obj.add_cerca && (
                  <div>
                    <h4>Add:</h4>
                    <h4>{recipe.obj.add_cerca}</h4>
                  </div>
                )}
              </div>
              {recipe.obj.esf_od_cerca ? (
                tabla_cerca(recipe)
              ) : recipe.obj.cil_od_cerca ? (
                tabla_cerca(recipe)
              ) : recipe.obj.eje_od_cerca ? (
                tabla_cerca(recipe)
              ) : recipe.obj.esf_oi_cerca ? (
                tabla_cerca(recipe)
              ) : recipe.obj.cil_oi_cerca ? (
                tabla_cerca(recipe)
              ) : recipe.obj.eje_oi_cerca ? (
                tabla_cerca(recipe)
              ) : (
                <span>No se encontro datos</span>
              )}
            </div>
          )}

          <div className="container_carrito_tabla">
            <table border="1px" className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Botones</th>
                </tr>
              </thead>
              <tbody>
                {itemCar.list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.product.descripcion}</td>
                      <td>{item.product.marca}</td>
                      <td>{item.amount}</td>
                      <td>{item.product.precio * item.amount}</td>
                      <td>
                        <button className="btn btn-danger">-</button>
                        <button className="btn btn-success">+</button>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handelEliminar(index, item.product.precio)
                          }
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="container_total">
            <div>
              <h4>Descuento: </h4>
              <input
                type="text"
                defaultValue={car.obj.descuento}
                onChange={handleChangeDiscount}
              />
              <button
                className="btn btn-warning"
                onClick={() => handeltipoDescuento()}
              >
                {tipoDescuento ? "%" : "n"}
              </button>
              <h4>
                {car.obj.tipo_descuento === "%"
                  ? car.obj.suma * (car.obj.descuento / 100)
                  : car.obj.descuento}
              </h4>
            </div>
            <div>
              <h4>Total: </h4>
              <h4>
                {car.obj.tipo_descuento === "%"
                  ? car.obj.suma - car.obj.suma * (car.obj.descuento / 100)
                  : car.obj.suma - car.obj.descuento}
              </h4>
            </div>
          </div>
        </div>
      )}
      <div className="container_products">
        <h1>Tienda</h1>
        <div className="contanier_cards">
          {products.list.length > 0 ? (
            products.list.map((product) => {
              return <Card product={product} key={product.id} />;
            })
          ) : (
            <span>No se encontro productos</span>
          )}
        </div>
      </div>
    </div>
  );
};
