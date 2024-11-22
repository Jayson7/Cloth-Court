import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [], // List of products fetched from the backend
    categories: [], // List of product categories
    types: [], // List of product types
    selectedCategory: null, // Currently selected category
    selectedType: null, // Currently selected product type
    status: "idle", // 'idle', 'loading', or 'failed'
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Populate the products from backend
    },
    setCategories: (state, action) => {
      state.categories = action.payload; // Populate product categories
    },
    setTypes: (state, action) => {
      state.types = action.payload; // Populate product types
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload; // Set the current category filter
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload; // Set the current type filter
    },
    setStatus: (state, action) => {
      state.status = action.payload; // Update the loading status
    },
    resetFilters: (state) => {
      state.selectedCategory = null; // Clear category filter
      state.selectedType = null; // Clear type filter
    },
  },
});

export const {
  setProducts,
  setCategories,
  setTypes,
  setSelectedCategory,
  setSelectedType,
  setStatus,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;
