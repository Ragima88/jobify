// features/jobs/jobSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { jobPosts } from "../../data/jobPosts";

const jobPostsSlice = createSlice({
  name: "jobPosts",
  initialState: {
    jobPosts: [],
    selectedJobPost: null,
  },
  reducers: {
    fetchJobPosts: (state) => {
      state.jobPosts = jobPosts;
    },
    fetchJobPostDetails: (state, action) => {
      const id = action.payload;
      state.selectedJobPost = jobPosts.find((post) => post.id === id);
    },
  },
});

export const { fetchJobPosts, fetchJobPostDetails } = jobPostsSlice.actions;

export default jobPostsSlice.reducer;
