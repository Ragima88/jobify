import Image from "../../components/Image/Image";
import Section from "../../components/Section/Section";
import "./vacancy.scss";
import picture from "../../assets/images/vacancy-pic.jpg";
import companyLogo from "../../assets/images/company-logo.jpg";
import BlackButton from "../../components/BlackButton/BlackButton";
import VacancySection from "../../sections/VacancySection/VacancySection";

const Vacancy = () => {
  const relatedJobs = [
    {
      id: 1,
      href: "#",
      src: "#",
      name: "Tourism and Leisure Specialist",
      company: "Marriott",
      region: "Fort Worth, Texas",
    },
    {
      id: 2,
      href: "#",
      src: "#",
      name: "Education Specialist",
      company: "Khan Academy",
      region: "Memphis, Tennessee",
    },
    {
      id: 3,
      href: "#",
      src: "#",
      name: "IT and Technology Specialist",
      company: "Google",
      region: "Sacramento, California",
    },
  ];
  return (
    <div className="vacancy-page">
      <Section className={"vacancy-heading-section"}>
        <h1>UX Designer</h1>
      </Section>
      <Section className={"vacancy-section"}>
        <article>
          <h2>Overview</h2>
          <Image className={"vacancy-pic"} src={picture} />
          <h2>Company Description</h2>
          <p>
            Company is a 2016 Iowa City-born start-up that develops consectetuer
            adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
            urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
            pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
            leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
            Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
            pede semper est, vitae luctus metus libero eu augue. Morbi purus
            libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
            lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
            felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
            arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <h2>Job Description</h2>
          <p>
            Company is a 2016 Iowa City-born start-up that develops consectetuer
            adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
            urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
            pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
            leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
            Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
            pede semper est, vitae luctus metus libero eu augue. Morbi purus
            libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
            lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
            felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
            arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
        </article>
        <aside>
          <Image className={"company-logo"} src={companyLogo} />
          <div className="line"></div>
          <div className="line"></div>
          <h2>Contact</h2>
          <BlackButton />
        </aside>
      </Section>
      <VacancySection heading={"Related Jobs"} vacancies={relatedJobs} />
    </div>
  );
};
export default Vacancy;
