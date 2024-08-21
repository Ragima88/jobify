import "./pricing.scss";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import pic from "../../assets/images/pricing-pic.png";
import pic2 from "../../assets/images/pricing-pic2.png";

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
      <Section className={"pricing-plans-section"}>
        <h2>Plans and Pricing</h2>
        <div className="pricing-plans-list">
          <div className="plan-list">
            <h3>Small Team</h3>
            <div className="price">$69.00</div>
            <div className="price-duration">$69.00 for 1 job for 60 days</div>
            <Image className={"pricing-pic"} src={pic} />
            <p>Post 1 Job</p>
            <p>Edit Your Job Listings</p>
            <p>See Job Posting Stats</p>
            <p className="last">Job Listing Expire In 60 Days</p>
            <WhiteButton className={"pricing-button"} text={"Get Started"} />
          </div>
          <div className="plan-list">
            <h3>Enterprise</h3>
            <div className="price">$199.00</div>
            <div className="price-duration">
              $199.00 for 20 jobs for 190 days
            </div>
            <Image className={"pricing-pic"} src={pic2} />
            <p>Post Unlimted Jobs</p>
            <p>Unlimted Featured Jobs</p>
            <p>Edit Your Job Listings</p>
            <p>See Job Posting Stats</p>
            <p>24/7 Critical Support</p>
            <p className="last">Job Listing Expire In 190 Days</p>
            <WhiteButton className={"pricing-button"} text={"Get Started"} />
          </div>
          <div className="plan-list">
            <h3>Corporate</h3>
            <div className="price">$199.00</div>
            <div className="price-duration">
              $199.00 for 20 jobs for 190 days
            </div>
            <Image className={"pricing-pic"} src={pic} />
            <p>Post Unlimted Jobs</p>
            <p>Unlimted Featured Jobs</p>
            <p>Edit Your Job Listings</p>
            <p>See Job Posting Stats</p>
            <p>24/7 Critical Support</p>
            <p className="last">Job Listing Expire In 190 Days</p>
            <WhiteButton className={"pricing-button"} text={"Get Started"} />
          </div>
        </div>
      </Section>
    </div>
  );
};
export default Pricing;
