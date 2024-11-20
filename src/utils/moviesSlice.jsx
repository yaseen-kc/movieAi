import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    AddNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { AddNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
