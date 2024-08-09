import Container from "../Container/Container";
import "./section.scss";

const Section = ({ children, sectionClass }) => {
  return (
    <section className={`section ${sectionClass}`}>
      <Container>
        <div className={`${sectionClass}-in`}>{children}</div>
      </Container>
    </section>
  );
};
export default Section;
