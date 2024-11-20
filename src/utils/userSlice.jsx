/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user", // Slice name
  initialState: null, // Initial state is set to null, indicating no user logged in
  reducers: {
    // Reducer to add user data to the state
    addUser: (state, action) => {
      return action.payload;
    },
    // Reducer to remove user data from the state
    removeUser: (state, action) => {
      return null;
    },
  },
});

// Export actions to be used in components
export const { addUser, removeUser } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;
