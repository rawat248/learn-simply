import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courseReducer";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;
