import React, { useEffect } from "react";
import "./hero-section.scss";
import Section from "../../components/Section/Section";
import { useNavigate } from "react-router-dom";

const HeroSection = ({
  categories = [],
  locations = [],
  companies = [],
  title,
  desc,
  bg,
  filters,
  onFilterChange = () => {},
  onSubmit = () => {},
  redirect = false,
}) => {
  const navigate = useNavigate();
  const sortedCategories = [...categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedLocations = [...locations].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedCompanies = [...companies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: parseInt(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    navigate("/vacancies");
  };

  useEffect(() => {
    onSubmit();
    onFilterChange({
      ...filters,
    });
  }, []);

  return (
    <Section className={`${bg ? "has-background" : ""} hero-section`}>
      <h1 className="hero-section-title">{title}</h1>
      <p className="hero-section-desc">{desc}</p>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-top">
          <select
            className="form-top-input"
            name="company"
            id="company"
            value={filters?.company}
            onChange={handleInputChange}
          >
            <option value={-1}>Choose a company...</option>
            {sortedCompanies.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <select
            className="form-top-input"
            name="location"
            id="location"
            value={filters?.location}
            onChange={handleInputChange}
          >
            <option value={-1}>Choose a location...</option>
            {sortedLocations.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <select
            className="form-top-input"
            name="category"
            id="category"
            value={filters?.category}
            onChange={handleInputChange}
          >
            <option value={-1}>Choose a category...</option>
            {sortedCategories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <input className="form-bottom" type="submit" value="Search jobs" />
      </form>
    </Section>
  );
};

export default HeroSection;
