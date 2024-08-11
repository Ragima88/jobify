import "./parallax-section.scss";
import Section from "../../components/Section/Section";
import WhiteButton from "../../components/WhiteButton/WhiteButton";

const ParallaxSection = () => {
  return (
    <Section className={"parallax-section"}>
      <div className="parallax-content">
        <h2 className="parallax-title">
          Make Recruiting Your Competitive Advantage
        </h2>
        <p className="parallax-desc">
          Talent is a top priority for all startup founders and executives.
          Jobify offers a way to completely optimize your entire recruiting
          process. Find better candidates, conduct more focused interviews, and
          make data-driven hiring decisions.
        </p>
        <WhiteButton text={"Get Started"} />
      </div>
    </Section>
  );
};
export default ParallaxSection;
