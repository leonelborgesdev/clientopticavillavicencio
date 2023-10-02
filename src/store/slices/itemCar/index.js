import { createSlice } from "@reduxjs/toolkit";

export const itemCarSlice = createSlice({
  name: "itemCar",
  initialState: { list: [] },
  reducers: {
    setItemlist: (state, action) => {
      state.list.push(action.payload);
    },
    deleteItemlist: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { setItemlist, deleteItemlist } = itemCarSlice.actions;

export default itemCarSlice.reducer;
