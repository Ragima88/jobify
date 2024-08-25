import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import "./listing.scss";
import { useSelector } from "react-redux";

const Listing = ({ variant = "categories" }) => {
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

  return (
    <div className="listing-page">
      <Section className={"listing-heading-section"}>
        <h1>{variant}</h1>
      </Section>
      <Section className={"listing-section"}>
        <div className="listing-grid">
          {updatedListing.map((item) => (
            <div key={item.id} className="listing-item">
              <Link href={item.link} target="_blank">
                {item.name} ({item.count} posts)
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Listing;
