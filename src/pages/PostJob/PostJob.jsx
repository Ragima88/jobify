import { useSelector } from "react-redux";
import Section from "../../components/Section/Section";
import "./post-job.scss";
import { useState } from "react";

const PostJob = () => {
  const categories = useSelector((state) => state.categories.categories);
  const locations = useSelector((state) => state.locations.locations);

  const sortedCategories = [...categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedLocations = [...locations].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    description: "",
    remote: false,
    category: "",
    salaryMin: "",
    salaryMax: "",
    company: "",
    companyDescription: "",
    logo: null,
    website: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.logo) {
      alert("Please upload a logo.");
      return;
    }

    const existingData =
      JSON.parse(localStorage.getItem("postJobFormData")) || [];
    const updatedData = [...existingData, formData];

    localStorage.setItem("postJobFormData", JSON.stringify(updatedData));

    setFormData({
      jobTitle: "",
      location: "",
      description: "",
      remote: false,
      category: "",
      salaryMin: "",
      salaryMax: "",
      company: "",
      companyDescription: "",
      logo: null,
      website: "",
      email: "",
    });
  };

  return (
    <div className="post-job-page">
      <Section className={"post-job-heading-section"}>
        <h1>Post a Job</h1>
      </Section>
      <Section className={"post-job-form-section"}>
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label htmlFor="job-title">Job title</label>
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-div">
            <label htmlFor="location">Job location</label>
            <select
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value={-1}>Choose a location...</option>
              {sortedLocations.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-textarea">
            <label htmlFor="desc">Description</label>
            <textarea
              name="description"
              id="desc"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="remote"
              name="remote"
              checked={formData.remote}
              onChange={handleChange}
            />
            <label htmlFor="remote">Remote position</label>
          </div>
          <div className="form-div">
            <label htmlFor="category">Job category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value={-1}>Choose a category...</option>
              {sortedCategories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-div">
            <label htmlFor="salary_min">Salary</label>
            <div className="salary-group">
              <input
                type="number"
                id="salary_min"
                name="salaryMin"
                value={formData.salaryMin}
                onChange={handleChange}
                required
              />
              <label htmlFor="salary_max">To</label>
              <input
                type="number"
                id="salary_max"
                name="salaryMax"
                value={formData.salaryMax}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <h2>Company Details</h2>
          <div className="form-div">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-textarea">
            <label htmlFor="company-desc">Description</label>
            <textarea
              name="companyDescription"
              id="company-desc"
              value={formData.companyDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-fail">
            <label htmlFor="logo">Logo</label>
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-div">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-div">
            <label htmlFor="email">Application email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input className="submit" type="submit" value={"Save"} />
        </form>
      </Section>
    </div>
  );
};

export default PostJob;
