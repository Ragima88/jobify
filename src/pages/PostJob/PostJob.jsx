import Section from "../../components/Section/Section";
import "./post-job.scss";

const PostJob = () => {
  return (
    <div className="post-job-page">
      <Section className={"post-job-heading-section"}>
        <h1>Post a Job</h1>
      </Section>
      <Section className={"post-job-form-section"}>
        <form>
          <div className="form-div">
            <label for="company">Company</label>
            <select name="company" id="company">
              <option value="">Select company</option>
            </select>
          </div>
          <div className="form-div">
            <label htmlFor="job-title">Job title</label>
            <input type="text" id="job-title" />
          </div>
          <div className="form-div">
            <label htmlFor="email"> Application email/url</label>
            <input type="email" id="email" />
          </div>
          <div className="form-div">
            <label for="region">Job region</label>
            <select name="region" id="region">
              <option value="">Choose a region...</option>
            </select>
          </div>
          <div className="form-checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remote position</label>
          </div>
          <div className="form-fail">
            <label htmlFor="featured">Featured image</label>
            <input type="fail" id="featured" value={"Choose image"} />
          </div>
          <div className="form-div">
            <label for="category">Job category</label>
            <select name="category" id="category">
              <option value="">Choose a category...</option>
            </select>
          </div>
          <div className="form-textarea">
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc"></textarea>
          </div>
          <div className="form-fail">
            <label htmlFor="logo">Logo</label>
            <input type="fail" id="logo" value={"Choose image"} />
          </div>
          <div className="form-div">
            <label htmlFor="salary">Salary</label>
            <input type="text" id="salary" />
          </div>
          <h2>Company Details</h2>
          <div className="form-textarea">
            <label htmlFor="company-desc">Description</label>
            <textarea name="company-desc" id="company-desc"></textarea>
          </div>
          <div className="form-div">
            <label htmlFor="facebook">Facebook username</label>
            <input type="text" id="facebook" />
          </div>
          <input className="submit" type="submit" value={"Save"} />
        </form>
      </Section>
    </div>
  );
};
export default PostJob;
