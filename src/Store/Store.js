import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";  // Existing form slice
import authReducer from "./authSlice";  // Existing auth slice
import dataReducer from "./dataSlice";  // Add your dataSlice here

const store = configureStore({
  reducer: {
    form: formReducer,  // Form-related state
    auth: authReducer,  // Authentication-related state
    data: dataReducer,  // Data-related state (fetching posts or other data)
  },
});

export default store;
