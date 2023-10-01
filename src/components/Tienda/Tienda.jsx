import React from "react";
import { Nav } from "../Nav/Nav";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Tienda.css";

export const Tienda = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <Nav />
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
