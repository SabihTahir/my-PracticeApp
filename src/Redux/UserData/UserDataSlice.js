import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [];

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      const { userName, email, password } = action.payload;
      state.push({
        id: nanoid(),
        userName,
        email,
        password,
      });
    },
  },
});

export const { addUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
