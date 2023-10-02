import React, { useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { setItemlist } from "../../store/slices/itemCar";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const handleComprar = (itemcar) => {
    console.log("llego");
    dispatch(setItemlist(itemcar));
  };
  return (
    <div className="card_product">
      <div className="card_img">
        <img />
      </div>
      <h2>{product.marca && product.marca}</h2>
      <h2>{product.descripcion}</h2>
      <h2>{product.precio}</h2>
      <div>
        <button
          onClick={() =>
            handleComprar({
              id_product: product.id,
              amount: 1,
              subtotal: product.precio,
              product,
            })
          }
        >
          Comprar
        </button>
        <button>In Car</button>
        <button>Favorite</button>
      </div>
    </div>
  );
};
