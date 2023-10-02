import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import itemCarReducer from "./slices/itemCar";

export default configureStore({
  reducer: {
    products: productsReducer,
    itemCar: itemCarReducer,
  },
});
