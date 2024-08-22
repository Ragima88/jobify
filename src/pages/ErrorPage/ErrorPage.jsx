import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import "./error-page.scss";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="error-page">
        <Section className={"error-heading-section"}>
          <h1>Page Not Found</h1>
        </Section>
        <Section className={"error-section"}>
          <div className="not-found">404</div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
export default ErrorPage;
