import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };

export const imagesSlices = createSlice({
  name: "images",
  initialState,
  reducers: {
    setListImages: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setListImages } = imagesSlices.actions;

export default imagesSlices.reducer;
