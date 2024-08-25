import "./stats-section.scss";
import Section from "../../components/Section/Section";
const StatsSection = ({
  posted = 0,
  companies = 0,
  locations = 0,
  categories = 0,
}) => {
  return (
    <Section className={"stats-section"}>
      <h2 className="stats-section-title">Jobify Site Stats</h2>
      <p className="stats-section-desc">
        Here we list our site stats and how many people we’ve helped find a job
        and companies have found recruits. It's a pretty awesome stats area!
      </p>
      <ul className="stats-section-list">
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">{posted}</strong>
          Jobs Posted
        </li>
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">
            {locations}
          </strong>
          Locations
        </li>
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">
            {companies}
          </strong>
          Companies
        </li>
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">
            {categories}
          </strong>
          Categories
        </li>
      </ul>
    </Section>
  );
};
export default StatsSection;
