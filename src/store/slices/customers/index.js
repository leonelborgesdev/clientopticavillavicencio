import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, nombre: "Carlos", celular: 72896451 },
  { id: 2, nombre: "Juan", celular: 67849531 },
  { id: 3, nombre: "Lucas", celular: 156879486 },
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
