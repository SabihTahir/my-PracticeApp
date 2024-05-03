import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
