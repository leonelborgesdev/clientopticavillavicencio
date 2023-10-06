import { createSlice } from "@reduxjs/toolkit";

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
