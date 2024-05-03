import { configureStore } from "@reduxjs/toolkit";
import userDataSlice  from "./UserData/UserDataSlice";
import authSlice from "./Auth/AuthSlice";

export const store = configureStore({
    reducer: {
        userData: userDataSlice,
        auth: authSlice,
    },
})
