import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer, // Set up user slice in the Redux store
  },
});

export default appStore;
