import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import itemCarReducer from "./slices/itemCar";
import carReducer from "./slices/Car";
import clientReducer from "./slices/client";
import recipeReducer from "./slices/recipe";
import customersReducer from "./slices/customers";
import recipesReducer from "./slices/recipes";
import appointmentReducer from "./slices/appointments";
import imagesReducer from "./slices/images";

export default configureStore({
  reducer: {
    client: clientReducer,
    customers: customersReducer,
    appointments: appointmentReducer,
    recipe: recipeReducer,
    recipes: recipesReducer,
    products: productsReducer,
    images: imagesReducer,
    itemCar: itemCarReducer,
    car: carReducer,
  },
});
