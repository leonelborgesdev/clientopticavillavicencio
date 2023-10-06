import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import itemCarReducer from "./slices/itemCar";
import carReducer from "./slices/Car";
import clientReducer from "./slices/client";

export default configureStore({
  reducer: {
    client: clientReducer,
    products: productsReducer,
    itemCar: itemCarReducer,
    car: carReducer,
  },
});
