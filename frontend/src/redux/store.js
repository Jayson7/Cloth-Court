import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; // Import redux-thunk

// Example of custom logger middleware
const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next state:", storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    // Add other slices here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, loggerMiddleware),
});

export default store;
