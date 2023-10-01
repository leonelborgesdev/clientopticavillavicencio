import React from "react";

export const Card = ({ product }) => {
  return (
    <div className="card_product">
      <div className="card_img">
        <img />
      </div>
      <h2>{product.marca && product.marca}</h2>
      <h2>{product.descripcion}</h2>
      <h2>{product.precio}</h2>
    </div>
  );
};
