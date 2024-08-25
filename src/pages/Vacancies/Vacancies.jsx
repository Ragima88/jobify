import React, { useState } from "react";
import "./vacancies.scss";
import HeroSection from "../../sections/HeroSection/HeroSection";
import VacancySection from "../../sections/VacancySection/VacancySection";
import { useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";

const Vacancies = () => {
  const jobPosts = useSelector((state) => state.jobPosts.jobPosts);
  const categories = useSelector((state) => state.categories.categories);
  const companies = useSelector((state) => state.companies.companies);
  const locations = useSelector((state) => state.locations.locations);

  const {
    selectedFilters,
    filteredJobPosts,
    handleSelectChange,
    handleFilterChange,
  } = useFilter(jobPosts);

  return (
    <>
      <HeroSection
        categories={categories}
        locations={locations}
        companies={companies}
        title={"Find a job"}
        desc={""}
        bg={false}
        filters={selectedFilters}
        onFilterChange={handleSelectChange}
        onSubmit={handleFilterChange}
      />
      <VacancySection
        jobPosts={filteredJobPosts}
        companies={companies}
        locations={locations}
        hasButton
      />
    </>
  );
};

export default Vacancies;
