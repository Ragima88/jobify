import "./pricing.scss";
import Section from "../../components/Section/Section";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <Section className={"pricing-hero-section"}>
        <h1>Priced to Hire</h1>
        <p>
          Manually create a price table with options for anything you want. Or
          automatically generate a table using WooCommerce Paid Listings
        </p>
      </Section>
      <Section className={"pricing-plans-section"}></Section>
    </div>
  );
};
export default Pricing;
