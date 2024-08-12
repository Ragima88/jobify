import Image from "../../components/Image/Image";
import Section from "../../components/Section/Section";
import "./blog-section.scss";
import BlogImg1 from "../../assets/images/blog-img.jpg";
import BlogImg2 from "../../assets/images/blog-img2.jpg";
import BlogImg3 from "../../assets/images/blog-img3.jpg";
import GreenButton from "../../components/GreenButton/GreenButton";

const BlogSection = ({}) => {
  const articles = [
    {
      id: 1,
      src: BlogImg1,
      title: "The Best (and Worst) Canadian Merchant Account Providers",
      date: "March 29, 2016",
      text: "A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is",
    },
    {
      id: 2,
      src: BlogImg2,
      title:
        "Do you have a job that the average person doesn’t even know exists?",
      date: "March 22, 2016",
      text: "A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is",
    },
    {
      id: 3,
      src: BlogImg3,
      title: "DigitalOcean launches first Canadian data centre in Toronto",
      date: "February 22, 2016",
      text: "A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is",
    },
  ];
  return (
    <Section className={"blog-section"}>
      <h2 className="blog-section-title">Recent News Articles</h2>
      <p className="blog-section-desc">
        Fresh job related news content posted each day.
      </p>{" "}
      <div className="blog-section-articles">
        {articles.map((item) => {
          return (
            <div key={item.id} className="blog-section-article">
              <Image className={"blog-section-article-img"} src={item.src} />
              <h3 className="blog-section-article-title">{item.title}</h3>
              <p className="blog-section-article-date">{item.date}</p>
              <p className="blog-section-article-content">{item.text}</p>
              <GreenButton text={"Continue Reading"} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default BlogSection;
