import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [], // ✅ Stores form entries as an array
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData.push(action.payload); // ✅ Push new data into the array
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
