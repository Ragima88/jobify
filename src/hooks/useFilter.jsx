import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredJobPosts,
  setFilters,
} from "../store/slices/filteredJobPostsSlice";

export const useFilter = (jobPosts) => {
  const dispatch = useDispatch();

  const filteredJobPosts = useSelector(
    (state) => state.filteredJobPosts.filteredJobPosts
  );
  const selectedFilters = useSelector(
    (state) => state.filteredJobPosts.selectedFilters
  );

  const filterJobs = () => {
    const filtered = jobPosts
      .filter((job) => {
        const matchesCompany =
          selectedFilters.company === -1 ||
          job.companies_id === selectedFilters.company;
        const matchesLocation =
          selectedFilters.location === -1 ||
          job.locations_id === selectedFilters.location;
        const matchesCategory =
          selectedFilters.category === -1 ||
          job.categories_id === selectedFilters.category;

        return matchesCompany && matchesLocation && matchesCategory;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date.split(".").reverse().join("-"));
        const dateB = new Date(b.date.split(".").reverse().join("-"));
        return dateB - dateA;
      });

    dispatch(setFilteredJobPosts(filtered));
  };

  const handleFilterChange = () => {
    filterJobs();
  };

  const handleSelectChange = (newSelectedFilters) => {
    dispatch(setFilters(newSelectedFilters));
  };

  return {
    selectedFilters,
    filteredJobPosts,
    handleSelectChange,
    handleFilterChange,
  };
};
