import BlogAside from "../../components/BlogAside/BlogAside";
import BlogAuthor from "../../components/BlogAuthor/BlogAuthor";
import GreenButton from "../../components/GreenButton/GreenButton";
import Section from "../../components/Section/Section";
import "./blog.scss";

const Blog = () => {
  const card = [
    {
      id: 1,
      title: "The Best (and Worst) Canadian Merchant Account Providers",
      desc: "A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is",
    },
    {
      id: 2,
      title:
        "Do you have a job that the average person doesn’t even know exists?",
      desc: "A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is",
    },
  ];
  return (
    <div className="blog-page">
      <Section className="blog-heading-section">
        <h1>Blog</h1>
      </Section>
      <Section className={"blog-section"}>
        <div className="blog-cards">
          {card.map((item) => {
            return (
              <div key={item.id} className="blog-card">
                <BlogAuthor />
                <div className="blog-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <GreenButton
                    className={"blog-button"}
                    text={"Continue reading"}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <BlogAside />
      </Section>
    </div>
  );
};
export default Blog;
