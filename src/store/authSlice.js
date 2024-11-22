import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  isAdmin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isUserLoggedIn = true;
      state.isAdmin = false;
    },
    Adminlogin: (state) => {
      state.isAdmin = true;
      state.isUserLoggedIn = true;
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
      state.isAdmin = false;
    },
  },
});

export const { login, logout, Adminlogin } = authSlice.actions;
export default authSlice.reducer;
