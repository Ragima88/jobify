import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import categoriesReducer from "./slices/categoriesSlice";
import companiesReducer from "./slices/companiesSlice";
import locationsReducer from "./slices/locationsSlice";
import jobPostsReducer from "./slices/jobPostsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  companies: companiesReducer,
  locations: locationsReducer,
  jobPosts: jobPostsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
