import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = { list: [] };

export const recipesSlices = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setListRecipes: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setListRecipes } = recipesSlices.actions;

export default recipesSlices.reducer;

export const getAllRecipes = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/receta`);
    if (response) {
      const data = await response.json();
      dispatch(setListRecipes(data.recetas));
    }
  };
};
