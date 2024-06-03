import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
