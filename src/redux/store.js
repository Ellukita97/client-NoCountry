import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice.js";
import userReducer from "./userSlice.js"

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user:userReducer,
  },
});
