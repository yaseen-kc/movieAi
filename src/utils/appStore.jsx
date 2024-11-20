import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // Set up user slice in the Redux store
    movies: moviesReducer,
  },
});

export default appStore;
