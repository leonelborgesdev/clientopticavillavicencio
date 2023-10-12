import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, nombre: "carlos", celular: 72896451 },
  { id: 2, nombre: "juan", celular: 67849531 },
];

export const customersSlices = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCustomerList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setCustomerList } = customersSlices.actions;

export default customersSlices.reducer;
