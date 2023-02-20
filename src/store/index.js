 import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authReducer/authReducer";
import { createSliceTodo } from "./todoReducer/store";

 const store = configureStore({
   reducer: {
     [createSliceTodo.name]: createSliceTodo.reducer,
     [authSlice.name]:authSlice.reducer
   },
   
 });


export default store