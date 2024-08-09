import Container from "../Container/Container";
import "./footer.scss";

const Footer = ({ children }) => {
  return (
    <footer className={"footer"}>
      <Container>
        <div className={"footer-in"}>{children}</div>
      </Container>
    </footer>
  );
};
export default Footer;
