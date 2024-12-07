import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    admin: null,
  },
};

const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.value.admin = action.payload;
    },
    removeAdmin: (state) => {
      state.value.admin = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAdmin,removeAdmin } = adminSlice.actions;

export default adminSlice.reducer;
