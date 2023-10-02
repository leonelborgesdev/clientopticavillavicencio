import { createSlice } from "@reduxjs/toolkit";

export const itemCarSlice = createSlice({
  name: "itemCar",
  initialState: { list: [] },
  reducers: {
    setItemlist: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setItemlist } = itemCarSlice.actions;

export default itemCarSlice.reducer;
