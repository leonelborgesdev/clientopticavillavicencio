import React from "react";
import { Nav } from "../Nav/Nav";
import { useSelector } from "react-redux";

export const Tienda = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <Nav />
      Tienda
    </div>
  );
};
