import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Tienda.css";
import { Link } from "react-router-dom";

export const Tienda = () => {
  const products = useSelector((state) => state.products);
  const itemCar = useSelector((state) => state.itemCar);
  return (
    <div>
      <div className="container_nav_tienda">
        <Link to="/">Volver</Link>
      </div>
      <div className="container_carrito">
        <div className="container_carrito_tabla">
          <table border={"1px"}>
            <thead>
              <tr>
                <th>N°</th>
                <th>Descripcion</th>
                <th>Marca</th>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
              {itemCar.list.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.product.descripcion}</td>
                    <td>{item.product.marca}</td>
                    <td>{item.product.precio}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
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
