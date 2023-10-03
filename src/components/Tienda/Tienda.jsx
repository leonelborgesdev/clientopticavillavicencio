import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Tienda.css";
import { Link } from "react-router-dom";
import { deleteItemlist } from "../../store/slices/itemCar";

export const Tienda = () => {
  const products = useSelector((state) => state.products);
  const itemCar = useSelector((state) => state.itemCar);
  const car = useSelector((state) => state.car);
  const [tipoDescuento, setTipoDescuento] = useState(true);
  const dispatch = useDispatch();
  const handelEliminar = (posicion) => {
    dispatch(deleteItemlist(posicion));
  };
  const handeltipoDescuento = () => {
    if (tipoDescuento) {
      setTipoDescuento(false);
    } else {
      setTipoDescuento(true);
    }
  };
  return (
    <div>
      <div className="container_nav_tienda">
        <Link to="/">Volver</Link>
        <h3>Orden</h3>
        <select name="orden">
          <option value="">Alfabetico</option>
          <option value="">Descripcion</option>
          <option value="">Precio</option>
        </select>
        <h3>Buscar</h3>
        <select name="select">
          <option value="">Descripcion</option>
          <option value="">Marca</option>
          <option value="">Precio</option>
        </select>
        <input type="text" />
        <button>Buscar</button>
      </div>
      {itemCar.list.length > 0 && (
        <div className="container_carrito">
          <div className="container_carrito_tabla">
            <table border={"1px"}>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Descripcion</th>
                  <th>Marca</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Botones</th>
                </tr>
              </thead>
              <tbody>
                {itemCar.list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.product.descripcion}</td>
                      <td>{item.product.marca}</td>
                      <td>{item.amount}</td>
                      <td>{item.product.precio * item.amount}</td>
                      <td>
                        <button className="bt_carrito">+</button>
                        <button className="bt_carrito">-</button>
                        <button
                          className="bt_carrito"
                          onClick={() => handelEliminar(index)}
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
              <input type="text" />
              <button onClick={() => handeltipoDescuento()}>
                {tipoDescuento ? "%" : "n"}
              </button>
              {/* <h4>{descuento}</h4> */}
            </div>
            <div>
              <h4>Total: </h4>
              <h4>{car.obj.suma}</h4>
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
