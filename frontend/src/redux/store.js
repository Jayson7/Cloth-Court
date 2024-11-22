import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import vendorReducer from "./slices/vendorSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";

// Configure Redux Store
const store = configureStore({
  reducer: {
    products: productReducer, // Manages product-related state
    vendors: vendorReducer, // Manages vendor-related state
    user: userReducer, // Manages user authentication and profile state
    cart: cartReducer, // Manages cart-related state
  },
});

export default store;
