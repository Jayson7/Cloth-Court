import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, // User object after login
    accessToken: null, // Short-lived access token
    refreshToken: null, // Long-lived refresh token
    isAuthenticated: false, // Whether the user is authenticated
    status: "idle", // 'idle', 'loading', 'failed'
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
    refreshAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken; // Update only the access token
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }; // Update user profile
    },
    setStatus: (state, action) => {
      state.status = action.payload; // Update loading status
    },
  },
});

export const { login, logout, refreshAccessToken, updateUser, setStatus } =
  userSlice.actions;

export default userSlice.reducer;
