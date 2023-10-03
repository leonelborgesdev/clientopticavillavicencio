import { createSlice } from "@reduxjs/toolkit";

export const CarSlice = createSlice({
  name: "Car",
  initialState: { obj: {} },
  reducers: {
    setCarObj: (state, action) => {
      state.obj = action.payload;
    },
  },
});

export const { setCarObj } = CarSlice.actions;

export default CarSlice.reducer;
