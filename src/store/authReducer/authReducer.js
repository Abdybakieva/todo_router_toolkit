import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: "",
  isLogout: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isLogout = true;
    },
    logout(state, action) {
      state = initialState;
    },
  },
});
export const autnActions = authSlice.actions;
