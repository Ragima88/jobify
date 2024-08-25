import HeroSection from "../../sections/HeroSection/HeroSection";
import "./home.scss";
import Partners from "../../sections/Partners/Partners";
import ParallaxSection from "../../sections/ParallaxSection/ParallaxSection";
import VacancySection from "../../sections/VacancySection/VacancySection";
import StatsSection from "../../sections/StatsSection/StatsSection";
import SliderSection from "../../sections/SliderSection/SliderSection";
import BlogSection from "../../sections/BlogSection/BlogSection";
import { useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";

const Home = () => {
  const jobPosts = useSelector((state) => state.jobPosts.jobPosts);
  const categories = useSelector((state) => state.categories.categories);
  const companies = useSelector((state) => state.companies.companies);
  const locations = useSelector((state) => state.locations.locations);

  const sortedJobPosts = [...jobPosts].sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));
    return dateB - dateA;
  });

  const rightParallaxContent = {
    title: "Make Recruiting Your Competitive Advantage",
    desc: "Talent is a top priority for all startup founders and executives. Jobify offers a way to completely optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.",
    button: "Post a Job",
    href: "/post-a-job",
  };
  const leftParallaxContent = {
    title: "Join Thousands of Companies That Rely on Jobify",
    desc: "Jobify offers a way to completely optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.",
    button: "Get started",
    href: "/pricing",
  };

  const { selectedFilters, handleSelectChange, handleFilterChange } =
    useFilter(jobPosts);

  return (
    <div className="home-page">
      <HeroSection
        categories={categories}
        locations={locations}
        companies={companies}
        title={"The Easiest Way to Get Your New Job"}
        desc={
          "Find jobs, create trackable resumes and enrich your applications."
        }
        bg={true}
        filters={selectedFilters}
        onFilterChange={handleSelectChange}
        onSubmit={handleFilterChange}
        redirect={true}
      />
      <Partners />
      <ParallaxSection content={rightParallaxContent} align={"right"} />
      <VacancySection
        heading={"Hundreds of Jobs From All Over the Globe"}
        jobPosts={sortedJobPosts}
        companies={companies}
        locations={locations}
        hasButton
      />
      <ParallaxSection content={leftParallaxContent} align={"left"} />
      <StatsSection
        posted={jobPosts.length}
        categories={categories.length}
        locations={locations.length}
        companies={companies.length}
      />
      <SliderSection />
      <BlogSection />
    </div>
  );
};
export default Home;
