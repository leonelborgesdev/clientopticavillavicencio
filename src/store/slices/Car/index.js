import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: { obj: {} },
  reducers: {
    setCarObj: (state, action) => {
      state.obj = action.payload;
    },
  },
});

export const { setCarObj } = carSlice.actions;

export default carSlice.reducer;
