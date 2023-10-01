import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
