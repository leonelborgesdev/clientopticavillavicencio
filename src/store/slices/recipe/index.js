import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: { obj: {} },
  reducers: {
    setRecipeObj: (state, action) => {
      state.obj = action.payload;
    },
  },
});

export const { setRecipeObj } = recipeSlice.actions;

export default recipeSlice.reducer;

export const fetchAddRecipe = (receta) => {
  return async function (dispatch) {
    const response = await fetch(`${api}/recetas`, {
      method: "POST",
      headers: {
        "Content/type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    if (response) {
      dispatch(setRecipeObj(receta));
    }
  };
};
