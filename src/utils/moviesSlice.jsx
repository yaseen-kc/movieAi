import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    AddNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    AddTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { AddNowPlayingMovies, AddTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
