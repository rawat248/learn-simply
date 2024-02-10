import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
