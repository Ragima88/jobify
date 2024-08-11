import "./partners.scss";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";
import picCompany1 from "./images/testimonial-company-1.png";
import picCompany2 from "./images/testimonial-company-2.png";
import picCompany3 from "./images/testimonial-company-3.png";
import picCompany4 from "./images/testimonial-company-4.png";
import picCompany5 from "./images/testimonial-company-5.png";

const Partners = () => {
  return (
    <Section className={"partners-section"}>
      <h2 className="partners-title">Companies We've Helped</h2>
      <p className="partners-desc">
        Some of the companies we've helped recruit excellent applicants over the
        years.
      </p>
      <div className="partners-images">
        <Image className={"partners-img"} src={picCompany1} />
        <Image className={"partners-img"} src={picCompany2} />
        <Image className={"partners-img"} src={picCompany3} />
        <Image className={"partners-img"} src={picCompany4} />
        <Image className={"partners-img"} src={picCompany5} />
      </div>
    </Section>
  );
};
export default Partners;
