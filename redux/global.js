import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "allthings",
  initialState: {
      name:'maher'
  },
  reducers: {
  
   
    changename: (state, action) => {
        state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changename } = carSlice.actions;

export default carSlice.reducer;