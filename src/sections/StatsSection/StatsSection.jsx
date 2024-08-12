import "./stats-section.scss";
import Section from "../../components/Section/Section";
const StatsSection = () => {
  return (
    <Section className={"stats-section"}>
      <h2 className="stats-section-title">Jobify Site Stats</h2>
      <p className="stats-section-desc">
        Here we list our site stats and how many people we’ve helped find a job
        and companies have found recruits. It's a pretty awesome stats area!
      </p>
      <ul className="stats-section-list">
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">14</strong>Jobs
          Posted
        </li>
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">0</strong>Jobs
          Filled
        </li>
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">14</strong>
          Companies
        </li>
        <li className="stats-section-list-item">
          <strong className="stats-section-list-item-number">2,047</strong>
          Members
        </li>
      </ul>
    </Section>
  );
};
export default StatsSection;
