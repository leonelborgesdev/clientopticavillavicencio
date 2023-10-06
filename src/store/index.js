import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import itemCarReducer from "./slices/itemCar";
import carReducer from "./slices/Car";
import clientReducer from "./slices/client";
import recipeReducer from "./slices/recipe";

export default configureStore({
  reducer: {
    client: clientReducer,
    recipe: recipeReducer,
    products: productsReducer,
    itemCar: itemCarReducer,
    car: carReducer,
  },
});
