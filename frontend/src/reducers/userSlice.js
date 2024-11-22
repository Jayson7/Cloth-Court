import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, // User object after login
    token: null, // Auth token
    isAuthenticated: false, // Whether the user is authenticated
    status: "idle", // 'idle', 'loading', 'failed'
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }; // Update user profile
    },
    setStatus: (state, action) => {
      state.status = action.payload; // Update loading status
    },
  },
});

export const { login, logout, updateUser, setStatus } = userSlice.actions;

export default userSlice.reducer;
