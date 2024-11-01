import { createSlice } from "@reduxjs/toolkit";
import { sortCoursesByNameLogic } from "../logic/filters.logic";

const initialState = {
  coursesDefault: [
    {
      id: 0,
      title: "",
      description: "",
      status: true,
      price: 0.0,
    },
  ],
  coursesToSearch: [
    {
      id: 0,
      title: "",
      description: "",
      status: true,
      price: 0.0,
    },
  ],
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCoursesArr: (state, action) => {
      state.coursesDefault = action.payload;
      state.coursesToSearch = action.payload;
    },
    sortByNameCourses: (state, action) => {
      const valueToSortBy = action.payload;
      state.coursesToSearch = sortCoursesByNameLogic(
        state.coursesDefault,
        valueToSortBy
      );
    },
  },
});

export const { addCoursesArr, sortByNameCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
