import "./parallax-section.scss";
import Section from "../../components/Section/Section";
import WhiteButton from "../../components/WhiteButton/WhiteButton";

const ParallaxSection = ({ align, content }) => {
  return (
    <Section className={`${align}-aligned parallax-section`}>
      <div className="parallax-content">
        <h2 className="parallax-title">{content.title}</h2>
        <p className="parallax-desc">{content.desc}</p>
        <WhiteButton text={content.button} src={"pricing"} />
      </div>
    </Section>
  );
};
export default ParallaxSection;
