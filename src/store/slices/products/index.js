import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
  list: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setListProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setListProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/producto`);
    if (response) {
      const data = await response.json();
      dispatch(setListProducts(data.list_products));
    }
  };
};

export const getProductsByDescription = (descripcion) => {
  return async function (dispatch) {
    console.log("llego");
    const response = await fetch(`${api}/producto?descripcion=${descripcion}`);
    if (response) {
      const data = await response.json();
      console.log(data);
      dispatch(setListProducts(data.list_products));
    }
  };
};

export const fetchAddProduct = (product) => {
  return async function (dispatch) {
    const response = fetch(`${api}/producto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
};
