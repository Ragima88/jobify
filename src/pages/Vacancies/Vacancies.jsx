import "./vacancies.scss";
import HeroSection from "../../sections/HeroSection/HeroSection";
import VacancySection from "../../sections/VacancySection/VacancySection";
import { useSelector } from "react-redux";

const Vacancies = () => {
  const jobPosts = useSelector((state) => state.jobPosts.jobPosts);
  const categories = useSelector((state) => state.categories.categories);
  const companies = useSelector((state) => state.companies.companies);
  const locations = useSelector((state) => state.locations.locations);

  const sortedJobPosts = [...jobPosts].sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));
    return dateB - dateA;
  });
  return (
    <>
      <HeroSection
        categories={categories}
        locations={locations}
        companies={companies}
        title={"Find a job"}
        desc={""}
        bg={false}
      />
      <VacancySection
        jobPosts={sortedJobPosts}
        companies={companies}
        locations={locations}
        hasButton
      />
    </>
  );
};
export default Vacancies;
