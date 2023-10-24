import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormGroup, Input } from "reactstrap";
import { v4 as uuid } from "uuid";
import { fetchAddImage } from "../../store/slices/images";
import { fetchAddProduct } from "../../store/slices/products";

export const CrearProductos = () => {
  const [image, setImage] = useState({ id: uuid() });
  const [product, setProduct] = useState({ id: uuid(), ImageId: image.id });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uploadImage = async (e) => {
    const file = e.target.files;
    setImage({ ...image, ["image"]: file[0] });
    console.log(file, image);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSave = async () => {
    await dispatch(fetchAddImage(image));
    dispatch(fetchAddProduct(product));
    navigate("/");
  };
  return (
    <div>
      <Link to={"/"}>Volver</Link>
      <h2>Registrar Producto</h2>
      <h3>Descripcion:</h3>
      <input type="text" name="descripcion" onChange={handleChange} />
      <h3>Stock</h3>
      <input type="text" name="stock" onChange={handleChange} />
      <h3>Precio</h3>
      <input type="text" name="precio" onChange={handleChange} />
      <Container>
        <FormGroup>
          <Input
            type="file"
            name="file"
            placeholder="Sube tu imagen aqui.."
            onChange={uploadImage}
          />
        </FormGroup>
        <button onClick={handleSave}>Guardar</button>
      </Container>
    </div>
  );
};
