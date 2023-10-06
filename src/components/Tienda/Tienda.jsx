import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./Tienda.css";
import { Link } from "react-router-dom";
import { deleteItemlist } from "../../store/slices/itemCar";
import { setCarObj } from "../../store/slices/Car";

export const Tienda = () => {
  const products = useSelector((state) => state.products);
  const itemCar = useSelector((state) => state.itemCar);
  const client = useSelector((state) => state.client);
  const car = useSelector((state) => state.car);
  const [tipoDescuento, setTipoDescuento] = useState(true);
  const dispatch = useDispatch();
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
          <div className="container_carrito_cliente">
            <h3>Nombre:</h3>
            <h3>{client.obj.nombre}</h3>
            <h3>Cel/Telf:</h3>
            <h3>{client.obj.celular}</h3>
            <button>Clientes</button>
            <button>Receta</button>
          </div>
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
                        <button className="bt_carrito">-</button>
                        <button className="bt_carrito">+</button>
                        <button
                          className="bt_carrito"
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
              <button onClick={() => handeltipoDescuento()}>
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
