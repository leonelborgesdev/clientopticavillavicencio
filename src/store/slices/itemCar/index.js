import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const itemCarSlice = createSlice({
  name: "itemCar",
  initialState,
  reducers: {
    setItemlist: (state, action) => {
      state.push(action.payload);
    },
    editItemAmount: (state, action) => {
      const { id, newAmount } = action.payload;
      const foundItem = state.find((item) => item.id === id);
      if (foundItem) {
        foundItem.amount = newAmount;
      }
    },
    deleteItemlist: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { setItemlist, editItemAmount, deleteItemlist } =
  itemCarSlice.actions;

export default itemCarSlice.reducer;
