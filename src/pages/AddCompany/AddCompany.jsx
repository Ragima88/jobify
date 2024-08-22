import "./add-company.scss";
import Section from "../../components/Section/Section";
const AddCompany = () => {
  return (
    <div className="add-company-page">
      <Section className="add-company-heading-section">
        <h1>Submit Company</h1>
      </Section>
      <Section className="add-company-section">
        <form>
          <div className="form-div">
            <label htmlFor="name"> Name</label>
            <input type="text" id="name" placeholder="Company name" />
          </div>
          <div className="form-div">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              id="email"
              placeholder="contact@companydomain.com"
            />
          </div>
          <div className="form-div">
            <label htmlFor="region"> Region</label>
            <input
              type="text"
              id="region"
              placeholder='e.g. "London,UK", "New York", "Houston"'
            />
          </div>
          <div className="form-fail">
            <label htmlFor="logo">Logo</label>
            <input type="fail" id="logo" value={"Choose image"} />
          </div>
          <div className="form-div">
            <label htmlFor="website"> Website</label>
            <input type="text" id="website" placeholder="http://" />
          </div>
          <div className="form-textarea">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content"></textarea>
          </div>
          <input className="submit" type="submit" value={"Preview"} />
        </form>
      </Section>
    </div>
  );
};
export default AddCompany;
