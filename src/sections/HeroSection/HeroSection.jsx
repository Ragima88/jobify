import "./hero-section.scss";
import Section from "../../components/Section/Section";

const HeroSection = ({ categories }) => {
  const sortedCategories = categories.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Section className={"hero-section"}>
      <h1 className="hero-section-title">
        The Easiest Way to Get Your New Job
      </h1>
      <p className="hero-section-desc">
        Find jobs, create trackable resumes and enrich your applications.
      </p>
      <form className="search-form">
        <div className="form-top">
          <input
            className="form-top-input"
            type="text"
            placeholder="Keywords"
          />
          <input
            className="form-top-input"
            type="text"
            placeholder="Location"
          />
          <select className="form-top-input" name="category" id="category">
            <option value={-1}>Choose a category...</option>
            {sortedCategories.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <input className="form-bottom" type="submit" value="Search jobs" />
      </form>
    </Section>
  );
};

export default HeroSection;
