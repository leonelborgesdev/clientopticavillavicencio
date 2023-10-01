import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [
      {
        marca: "Rayban",
        precio: 350,
        descripcion: "rojo-azul de acetato",
        stock: 1,
      },
      {
        marca: "Rayban",
        precio: 350,
        descripcion: "negro-verde de acetato",
        stock: 2,
      },
      {
        marca: "ECO",
        precio: 350,
        descripcion: "negro-azul de acetato",
        stock: 2,
      },
      {
        marca: "ECO",
        precio: 350,
        descripcion: "negro-gris de acetato",
        stock: 2,
      },
      { precio: 10, descripcion: "liquido para lentes", stock: 20 },
      { precio: 80, descirpcion: "liquido para lentes de contacto", stock: 13 },
    ],
  },
  reducers: {},
});

export default productsSlice.reducer;
