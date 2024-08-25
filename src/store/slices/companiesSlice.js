// features/jobs/jobSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { companies } from "../../data/companies";

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
  },
  reducers: {
    fetchCompanies: (state) => {
      state.companies = companies;
    },
  },
});

export const { fetchCompanies } = companiesSlice.actions;

export default companiesSlice.reducer;
