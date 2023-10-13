import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const recipesSlices = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setRecipeList } = recipesSlices.actions;

export default recipesSlices.reducer;
