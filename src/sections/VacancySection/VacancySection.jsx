import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import "./vacancy-list-section.scss";
import Image from "../../components/Image/Image";
import ListButton from "../../components/ListButton/ListButton";

const VacancySection = ({
  vacancies = [],
  heading = "",
  hasButton = false,
  className = "",
}) => {
  return (
    <Section className={`${className} vacancy-list-section`}>
      <h2 className="vacancy-list-section-title">{heading}</h2>
      <div className="vacancy-list-section-list">
        {vacancies.map((item) => {
          return (
            <Link className="vacancy-list-item" key={item.id} to={item.href}>
              <div className="vacancy-list-item-image-bg">
                <Image className="vacancy-list-item-image" src={item.src} />
              </div>
              <div className="vacancy-list-item-desc">
                <div className="vacancy-list-item-desc-name">{item.name}</div>
                <div className="vacancy-list-item-desc-company">
                  <b>{item.company}</b>
                </div>
              </div>
              <div className="vacancy-list-item-region">{item.region}</div>
            </Link>
          );
        })}
      </div>
      {hasButton ? <ListButton /> : ""}
    </Section>
  );
};
export default VacancySection;
