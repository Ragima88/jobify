import { createSlice } from "@reduxjs/toolkit";

const filteredJobPostsSlice = createSlice({
  name: "filteredJobPosts",
  initialState: {
    filteredJobPosts: [],
    selectedFilters: {
      company: -1,
      location: -1,
      category: -1,
    },
  },
  reducers: {
    setFilteredJobPosts: (state, action) => {
      state.filteredJobPosts = action.payload;
    },
    setFilters: (state, action) => {
      state.selectedFilters = action.payload;
    },
  },
});

export const { setFilteredJobPosts, setFilters } =
  filteredJobPostsSlice.actions;

export default filteredJobPostsSlice.reducer;
