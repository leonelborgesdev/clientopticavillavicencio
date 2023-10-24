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

export default productsSlice.reducer;

export const fetchAddProduct = (product) => {
  return async function (dispatch) {
    const response = fetch(`${api}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
};
