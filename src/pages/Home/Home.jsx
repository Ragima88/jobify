import HeroSection from "../../sections/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import "./home.scss";
import Partners from "../../sections/Partners/Partners";
import ParallaxSection from "../../sections/ParallaxSection/ParallaxSection";
import VacancySection from "../../sections/VacancySection/VacancySection";
import StatsSection from "../../sections/StatsSection/StatsSection";

const Home = () => {
  const categories = [
    { id: 1, name: "Design and Art" },
    { id: 2, name: "HR and Office Management" },
    { id: 3, name: "Law" },
    { id: 4, name: "IT and Technology" },
    { id: 5, name: "Media and Publishing" },
    { id: 6, name: "Finance" },
    { id: 7, name: "Marketing" },
    { id: 8, name: "Customer Service" },
    { id: 9, name: "Transport" },
    { id: 10, name: "Sales" },
    { id: 11, name: "Industry and Construction" },
    { id: 12, name: "Supply and Logistics" },
    { id: 13, name: "Security" },
    { id: 14, name: "Education" },
    { id: 15, name: "Healthcare" },
    { id: 16, name: "Tourism and Leisure" },
    { id: 17, name: "Agriculture" },
    { id: 18, name: "Hospitality" },
  ];
  const rightParallaxContent = {
    title: "Make Recruiting Your Competitive Advantage",
    desc: "Talent is a top priority for all startup founders and executives. Jobify offers a way to completely optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.",
    button: "Get started",
  };
  const leftParallaxContent = {
    title: "Join Thousands of Companies That Rely on Jobify",
    desc: "Jobify offers a way to completely optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.",
    button: "Get started",
  };
  return (
    <div className="home-page">
      <HeroSection categories={categories} />
      <Partners />
      <ParallaxSection content={rightParallaxContent} align={"right"} />
      <VacancySection />
      <ParallaxSection content={leftParallaxContent} align={"left"} />
      <StatsSection />
    </div>
  );
};
export default Home;
