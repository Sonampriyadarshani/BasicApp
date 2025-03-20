import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null, 
  users: [],
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
    },
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;
export default authSlice.reducer;
