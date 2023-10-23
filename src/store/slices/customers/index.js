import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
  list: [],
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

export default customersSlices.reducer;
