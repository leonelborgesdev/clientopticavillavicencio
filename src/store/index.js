import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import itemCarReducer from "./slices/itemCar";
import CarReducer from "./slices/Car";

export default configureStore({
  reducer: {
    products: productsReducer,
    itemCar: itemCarReducer,
    car: CarReducer,
  },
});
