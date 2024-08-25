import Image from "../../components/Image/Image";
import Section from "../../components/Section/Section";
import "./vacancy.scss";

import BlackButton from "../../components/BlackButton/BlackButton";
import VacancySection from "../../sections/VacancySection/VacancySection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchJobPostDetails,
  fetchRelatedJobPosts,
} from "../../store/slices/jobPostsSlice";

const Vacancy = () => {
  const { vacancyId } = useParams();
  const dispatch = useDispatch();
  const { selectedJobPost, relatedJobPosts } = useSelector(
    (state) => state.jobPosts
  );
  const categories = useSelector((state) => state.categories.categories);
  const companies = useSelector((state) => state.companies.companies);
  const locations = useSelector((state) => state.locations.locations);

  const [category, setCategory] = useState({});
  const [company, setCompany] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    dispatch(fetchJobPostDetails(vacancyId));
  }, [vacancyId, dispatch]);

  useEffect(() => {
    if (selectedJobPost) {
      setCategory(
        categories.find(
          (category) => category.id === selectedJobPost.categories_id
        ) || {}
      );
      setCompany(
        companies.find(
          (company) => company.id === selectedJobPost.companies_id
        ) || {}
      );
      setLocation(
        locations.find(
          (location) => location.id === selectedJobPost.locations_id
        ) || {}
      );
    }
  }, [selectedJobPost, categories, companies, locations]);

  useEffect(() => {
    if (category.id) {
      dispatch(fetchRelatedJobPosts(category.id));
    }
  }, [category, dispatch]);

  return (
    <div className="vacancy-page">
      <Section className={"vacancy-heading-section"}>
        <h1>
          {selectedJobPost?.title}
          {selectedJobPost?.is_remote && <span>{"Remote"}</span>}
        </h1>
      </Section>
      <Section className={"vacancy-section"}>
        <article>
          <h2>Overview</h2>
          <Image className={"vacancy-pic"} src={category?.image_url} />
          <h2>Job Description</h2>
          <p>{selectedJobPost?.description}</p>
          <h2>{company?.name}</h2>
          <p>{company?.description}</p>
          <p>
            <a
              href={company?.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company?.website}
            </a>
          </p>
        </article>
        <aside>
          <Image className={"company-logo"} src={company?.logo} />
          <p>{selectedJobPost?.date}</p>
          <div className="line"></div>
          <h2>Location</h2>
          <p className="location">{location?.name}</p>
          <div className="line"></div>
          <h2>Salary</h2>
          <p className="salary">{`${selectedJobPost?.salary_min}$ - ${selectedJobPost?.salary_max}$`}</p>
          <div className="line"></div>
          <h2>Contact</h2>
          <BlackButton
            caption={"Apply for job"}
            href={`mailto:${company?.email}`}
          />
        </aside>
      </Section>
      <VacancySection
        companies={companies}
        locations={locations}
        hasButton
        heading={"Related Jobs"}
        jobPosts={relatedJobPosts}
      />
    </div>
  );
};

export default Vacancy;
