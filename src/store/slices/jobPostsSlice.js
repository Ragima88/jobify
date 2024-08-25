import { createSlice } from "@reduxjs/toolkit";
import { jobPosts } from "../../data/jobPosts";

const jobPostsSlice = createSlice({
  name: "jobPosts",
  initialState: {
    jobPosts: [],
    selectedJobPost: null,
    relatedJobPosts: [],
  },
  reducers: {
    fetchJobPosts: (state) => {
      state.jobPosts = jobPosts;
    },
    fetchJobPostDetails: (state, action) => {
      const id = action.payload;
      state.selectedJobPost = jobPosts.find((post) => +post.id === +id);
    },
    fetchRelatedJobPosts: (state, action) => {
      const id = action.payload;
      state.relatedJobPosts = jobPosts.filter(
        (post) => post.categories_id === id
      );
    },
  },
});

export const { fetchJobPosts, fetchJobPostDetails, fetchRelatedJobPosts } =
  jobPostsSlice.actions;

export default jobPostsSlice.reducer;
