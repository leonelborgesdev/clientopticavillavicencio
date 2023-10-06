import { createSlice } from "@reduxjs/toolkit";

const initialState = { obj: {} };

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClientObj: (state, action) => {
      state.obj = action.payload;
    },
  },
});

export const { setClientObj } = clientSlice.actions;

export default clientSlice.reducer;
