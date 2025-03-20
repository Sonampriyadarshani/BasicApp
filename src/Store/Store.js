import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";  
import authReducer from "./authSlice";  
import dataReducer from "./dataSlice";  

const store = configureStore({
  reducer: {
    form: formReducer,  // Form-related state
    auth: authReducer,  // Authentication-related state
    data: dataReducer,  // Data-related state 
  },
});

export default store;
