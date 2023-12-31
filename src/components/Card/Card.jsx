import React, { useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { setItemlist } from "../../store/slices/itemCar";
import { setCarObj } from "../../store/slices/Car";
import { v4 as uuid } from "uuid";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.car);
  const handleComprar = (itemcar) => {
    dispatch(setItemlist(itemcar));
    handleCreateCar(product);
  };
  const handleCreateCar = (product) => {
    if (Object.keys(car.obj).length === 0) {
      dispatch(
        setCarObj({
          descuento: 0,
          tipo_descuento: "%",
          suma: car.obj.suma ? car.obj.suma + product.precio : product.precio,
        })
      );
    }
    if (Object.keys(car.obj).length > 0) {
      dispatch(
        setCarObj({
          ...car.obj,
          ["suma"]: car.obj.suma
            ? car.obj.suma + product.precio
            : product.precio,
        })
      );
    }
  };
  return (
    <div className="card_product">
      <div className="card_img">
        <img src={product.Image.secure_url} />
      </div>
      <h2>{product.marca && product.marca}</h2>
      <h2>{product.descripcion}</h2>
      <h4>Precio: {product.precio}</h4>
      <h4>Stock: {product.stock}</h4>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            handleComprar({
              id: uuid(),
              id_product: product.id,
              amount: 1,
              subtotal: product.precio,
              product,
            });
          }}
        >
          Comprar
        </button>
        <button className="btn btn-danger">Favorito</button>
      </div>
    </div>
  );
};
