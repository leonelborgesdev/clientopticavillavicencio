import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClientObj: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setClientObj } = clientSlice.actions;

export default clientSlice.reducer;
