import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // Set up user slice in the Redux store
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
