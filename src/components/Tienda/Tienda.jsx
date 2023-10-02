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
        <Link to="/home">Volver</Link>
      </div>
      <div className="container_carrito">
        {itemCar.list.map((item) => {
          return (
            <div>
              <h3>Descripcion</h3>
              <h4>{item.product.descripcion}</h4>
              <h3>Precio</h3>
              <h4>{item.product.precio}</h4>
            </div>
          );
        })}
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
