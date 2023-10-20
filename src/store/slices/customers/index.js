import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
  list: [
    { id: 1, nombre: "Carlos", celular: 72896451 },
    { id: 2, nombre: "Juan", celular: 67849531 },
    { id: 3, nombre: "Lucas", celular: 156879486 },
  ],
};

export const customersSlices = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCustomerList: (state, action) => {
      state.push(action.payload);
    },
    setListCustomer: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCustomerList, setListCustomer } = customersSlices.actions;

export const getAllClients = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/cliente`);
    if (response) {
      const data = await response.json();
      console.log("cliente", data.list_clients);
      dispatch(setListCustomer(data.list_clients));
    }
  };
};

export const createClient = () => {
  return async function (dispatch) {
    const response = await fetch(``);
  };
};

export default customersSlices.reducer;
