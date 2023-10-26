import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Tienda.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteItemlist, editItemAmount } from "../../store/slices/itemCar";
import { setCarObj } from "../../store/slices/Car";
import {
  getAllProducts,
  getProductsByDescription,
} from "../../store/slices/products";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.products);
  const itemCar = useSelector((state) => state.itemCar);
  const client = useSelector((state) => state.client);
  const recipe = useSelector((state) => state.recipe);
  const car = useSelector((state) => state.car);
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [tipoDescuento, setTipoDescuento] = useState(true);
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
  const handleEditAmount = (operacion, amount, id) => {
    if (operacion === "+") {
      const newAmount = amount + 1;
      dispatch(editItemAmount({ id, newAmount }));
    } else {
      const newAmount = amount - 1;
      if (newAmount > 0) {
        dispatch(editItemAmount({ id, newAmount }));
      }
    }
  };
  const handleCarVisible = () => {
    if (carritoVisible) {
      setCarritoVisible(false);
    } else {
      setCarritoVisible(true);
    }
  };
  const handleFilter = (e) => {
    const { value } = e.target;
    if (value) {
      // console.log(value);
      dispatch(getProductsByDescription(value));
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
        <input type="text" onChange={handleFilter} />
        <button>Buscar</button>
        <h2 className="icono_carrito" onClick={handleCarVisible}>
          Carrito: {itemCar.length}
        </h2>
      </div>
      {carritoVisible && (
        <div
          className="container_carrito"
          id={carritoVisible === true ? "carritoVisible" : "carritoNoVisible"}
        >
          <div className="container_carrito_cliente">
            <h2>Cliente</h2>
            <div className="container_carrito_cliente_datos">
              <h3>Nombre:</h3>
              <h4>{client.obj.nombre ? client.obj.nombre : "--"}</h4>
              <h4>Cel/Telf:</h4>
              <h4>{client.obj.celular ? client.obj.celular : "--"}</h4>
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
                  navigate("/recetas");
                }}
              >
                Receta
              </button>
            </div>
          </div>
          {Object.keys(recipe.obj).length > 0 && (
            <div className="container_carrito_receta">
              <h3>Receta:</h3>
              <div className="container_carrito_receta_doc">
                <h4>Doctor:</h4>
                <h4>{recipe.obj.doctor}</h4>
                <h4>Fecha:</h4>
                <h4>{recipe.obj.fecha}</h4>
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
          {itemCar.length > 0 && (
            <>
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
                    {itemCar.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.product.descripcion}</td>
                          <td>{item.product.marca}</td>
                          <td>{item.amount}</td>
                          <td>{item.product.precio * item.amount}</td>
                          <td className="container_item_buttoms">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                handleEditAmount("-", item.amount, item.id)
                              }
                            >
                              -
                            </button>
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() =>
                                handleEditAmount("+", item.amount, item.id)
                              }
                            >
                              +
                            </button>
                            <button
                              className="btn btn-primary btn-sm"
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
            </>
          )}
        </div>
      )}
      <div className="container_products">
        <h1>Tienda</h1>
        <div className="contanier_cards">
          {products.list?.length > 0 ? (
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
