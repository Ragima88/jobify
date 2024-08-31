import { Link, useNavigate } from "react-router-dom";
import Section from "../../components/Section/Section";
import "./listing.scss";
import { useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";

const Listing = ({ variant = "categories" }) => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.jobPosts.jobPosts);
  const listing = useSelector((state) => state[variant][variant]);
  const sortedListing = [...listing].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const updatedListing = sortedListing.map((item) => {
    const count = posts.filter(
      (post) => post[`${variant}_id`] === item.id
    ).length;
    return {
      ...item,
      count,
    };
  });
  const { _, handleSelectChange, handleFilterChange } = useFilter(posts);

  const listingVariant =
    variant === "categories"
      ? "category"
      : variant === "locations"
      ? "location"
      : variant === "companies"
      ? "company"
      : -1;

  const handleClick = (id) => {
    handleSelectChange({
      ...{
        company: -1,
        location: -1,
        category: -1,
      },
      [listingVariant]: id,
    });
    handleFilterChange();
    navigate("/vacancies");
  };

  return (
    <div className="listing-page">
      <Section className={"listing-heading-section"}>
        <h1>{variant}</h1>
      </Section>
      <Section className={"listing-section"}>
        <div className="listing-grid">
          {updatedListing.map((item) => (
            <div key={item.id} className="listing-item">
              <div onClick={() => handleClick(item.id)}>
                {item.name} ({item.count} posts)
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Listing;
