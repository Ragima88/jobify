import Section from "../Section/Section";
import "./footer.scss";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import xing from "./assets/xing.svg";
import SocialIcon from "./SocialIcon/SocialIcon";
import FooterColumn from "./FooterColumn/FooterColumn";
import Sizer from "../Sizer/Sizer";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcons = [
    { link: "#", name: "facebook", src: facebook },
    { link: "#", name: "instagram", src: instagram },
    { link: "#", name: "linkedin", src: linkedin },
    { link: "#", name: "twitter", src: twitter },
    { link: "#", name: "xing", src: xing },
  ];
  const footerLinks = [
    { link: "#", name: "Vacancies" },
    { link: "#", name: "Regions" },
    { link: "#", name: "Companies" },
    { link: "#", name: "Blog" },
  ];
  const footerBlogLinks = [
    {
      link: "#",
      name: "The Best (and Worst) Canadian Merchant Account Providers",
    },
    {
      link: "#",
      name: "Do you have a job that the average person doesn’t even know exists?",
    },
    {
      link: "#",
      name: "DigitalOcean launches first Canadian data centre in Toronto",
    },
  ];
  return (
    <footer className={"footer"}>
      <Section className={"footer-top"}>
        <div className="footer-top-question">
          <h2 className="footer-top-question-title">Got a question?</h2>
          <p className="footer-top-question-desc">
            We're here to help. Check out our FAQs, send us an email or call us
            at 1 800 555 5555
          </p>
        </div>
        <div className="footer-top-main">
          <FooterColumn>
            <Sizer width={"12.25rem"}>
              <Logo color={"gray"} />
            </Sizer>
            <p className="footer-column-logo-desc">
              Job Searching Just Got Easy. Use Jobify to run a hiring site and
              earn money in the process!
            </p>
          </FooterColumn>
          <FooterColumn>
            <h3 className="footer-column-site-map">Site Map</h3>
            {footerLinks.map((item) => {
              return (
                <Link key={item.name} className={"footer-link"} to={item.link}>
                  {item.name}
                </Link>
              );
            })}
          </FooterColumn>
          <FooterColumn>
            <h3 className="footer-column-articles">Recent News Articles</h3>
            {footerBlogLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  className={"footer-articles-link"}
                  to={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
          </FooterColumn>
          <FooterColumn>
            <h3 className="footer-column-offices">Jobify Offices</h3>
            <p className="footer-column-offices-desc">
              Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York
              10282
            </p>
            <p>
              Jobify Inc Canada. 545 Younge St, Suite 11 Toronto, Ontario M4K
              6F4
            </p>
          </FooterColumn>
        </div>
      </Section>
      <Section className={"footer-bottom"}>
        <p className={"footer-bottom-text"}>© 2024 — All Rights Reserved</p>
        <div className={"footer-bottom-icons"}>
          {socialIcons.map((item) => {
            return (
              <SocialIcon
                key={item.name}
                link={item.link}
                className={`${item.name}-icon`}
                src={item.src}
                alt={`${item.name} icon`}
              />
            );
          })}
        </div>
      </Section>
    </footer>
  );
};
export default Footer;
