import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import "./vacancy-list-section.scss";
import Image from "../../components/Image/Image";
import ListButton from "../../components/ListButton/ListButton";

const VacancySection = ({
  jobPosts = [],
  companies = [],
  locations = [],
  heading = "",
  hasButton = false,
  className = "",
}) => {
  const [visibleJobPosts, setVisibleJobPosts] = useState(10);

  const loadMore = () => {
    setVisibleJobPosts((prev) => prev + 10);
  };

  return (
    <Section className={`${className} vacancy-list-section`}>
      <h2 className="vacancy-list-section-title">{heading}</h2>
      {jobPosts.length ? (
        <div className="vacancy-list-section-list">
          {jobPosts.slice(0, visibleJobPosts).map((item) => {
            return (
              <Link
                className="vacancy-list-item"
                key={item.id}
                to={`/vacancy/${item.id}`}
              >
                <div className="vacancy-list-item-image-bg">
                  <Image
                    className="vacancy-list-item-image"
                    src={
                      companies.find(
                        (company) => company.id === item.companies_id
                      )?.logo
                    }
                  />
                </div>
                <div className="vacancy-list-item-desc">
                  <div className="vacancy-list-item-desc-name">
                    {item.title}
                  </div>
                  <div className="vacancy-list-item-desc-company">
                    <b>
                      {
                        companies.find(
                          (company) => company.id === item.companies_id
                        )?.name
                      }
                    </b>
                  </div>
                </div>
                <div className="vacancy-list-item-region">
                  {
                    locations.find(
                      (location) => location.id === item.locations_id
                    )?.name
                  }
                </div>
                <div className="vacancy-list-item-date">{item.date}</div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p>No item found</p>
      )}

      {hasButton && visibleJobPosts < jobPosts.length ? (
        <ListButton onClick={loadMore} />
      ) : (
        ""
      )}
    </Section>
  );
};

export default VacancySection;
