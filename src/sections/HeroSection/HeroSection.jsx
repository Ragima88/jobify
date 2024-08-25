import "./hero-section.scss";
import Section from "../../components/Section/Section";

const HeroSection = ({
  categories = [],
  locations = [],
  companies = [],
  title,
  desc,
  bg,
}) => {
  const sortedCategories = [...categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedLocations = [...locations].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedCompanies = [...companies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Section className={`${bg ? "has-background" : ""} hero-section`}>
      <h1 className="hero-section-title">{title}</h1>
      <p className="hero-section-desc">{desc}</p>
      <form className="search-form">
        <div className="form-top">
          <select className="form-top-input" name="company" id="company">
            <option value={-1}>Choose a company...</option>
            {sortedCompanies.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <select className="form-top-input" name="location" id="location">
            <option value={-1}>Choose a location...</option>
            {sortedLocations.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
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
