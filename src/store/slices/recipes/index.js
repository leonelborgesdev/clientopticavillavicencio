import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = { list: [] };

export const recipesSlices = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeList: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setRecipeList } = recipesSlices.actions;

export default recipesSlices.reducer;

export const getAllRecipes = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/receta`);
    if (response) {
      const data = await response.json();
      console.log(data);
    }
  };
};
