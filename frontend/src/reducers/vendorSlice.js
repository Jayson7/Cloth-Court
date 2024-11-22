import { createSlice } from "@reduxjs/toolkit";

const vendorSlice = createSlice({
  name: "vendor",
  initialState: {
    vendors: [], // List of all vendors
    selectedVendor: null, // Currently selected vendor
    status: "idle", // 'idle', 'loading', 'failed'
  },
  reducers: {
    setVendors: (state, action) => {
      state.vendors = action.payload; // Update the vendor list
    },
    setSelectedVendor: (state, action) => {
      state.selectedVendor = action.payload; // Set the selected vendor
    },
    setStatus: (state, action) => {
      state.status = action.payload; // Update the status
    },
  },
});

export const { setVendors, setSelectedVendor, setStatus } = vendorSlice.actions;

export default vendorSlice.reducer;
