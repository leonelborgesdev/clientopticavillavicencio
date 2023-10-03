import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import itemCarReducer from "./slices/itemCar";
import carReducer from "./slices/Car";

export default configureStore({
  reducer: {
    products: productsReducer,
    itemCar: itemCarReducer,
    car: carReducer,
  },
});
