import React, { useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { setItemlist } from "../../store/slices/itemCar";
import { setCarObj } from "../../store/slices/Car";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.car);
  const itemCar = useSelector((state) => state.itemCar);
  const handleComprar = (itemcar) => {
    dispatch(setItemlist(itemcar));
    handleCreateCar(product);
  };
  const handleCreateCar = (product) => {
    console.log("entro");
    if (Object.keys(car.obj).length === 0) {
      dispatch(
        setCarObj({
          descuento: 0,
          tipo_descuento: "%",
          suma: car.obj.suma ? car.obj.suma + product.precio : product.precio,
        })
      );
      console.log("entro3");
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
    console.log(car);
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
          onClick={() => {
            handleComprar({
              id_product: product.id,
              amount: 1,
              subtotal: product.precio,
              product,
            });
          }}
        >
          Comprar
        </button>
        <button>Favorito</button>
      </div>
    </div>
  );
};
