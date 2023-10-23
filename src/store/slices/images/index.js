import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

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

export const getAllImages = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/image`);
    if (response) {
      const data = response.json();
      console.log(data);
      dispatch(setListImages(data.list_images));
    }
  };
};

export default imagesSlices.reducer;
