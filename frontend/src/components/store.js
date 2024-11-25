import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice";
import vendorReducer from "../reducers/vendorSlice";
import userReducer from "../reducers/userSlice";
import cartReducer from "../reducers/cartSlice";

// Configure Redux Store
const store = configureStore({
  reducer: {
    products: productReducer, // Manages product-related state
    vendors: vendorReducer, // Manages vendor-related state
    user: userReducer, // Manages user authentication and profile state
    cart: cartReducer, // Manages cart-related state
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Keep default middleware (e.g., redux-thunk)
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

export default store;
