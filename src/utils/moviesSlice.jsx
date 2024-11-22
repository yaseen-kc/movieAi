import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    AddNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    AddPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    AddTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    AddUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  AddUpcomingMovies,
  AddTopRatedMovies,
  AddPopularMovies,
  AddNowPlayingMovies,
  addTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
