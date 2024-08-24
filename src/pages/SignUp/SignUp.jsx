import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import "./sign-up.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/slices/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setError("");
      dispatch(signUp(formData));
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setError("Passwords do not match!");
    }
  };
  return (
    <div className="sign-up">
      <Section className={"sign-up-section"}>
        <h1>Sign Up</h1>
        <div className="line"></div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="name-input">
            <div className="first-name">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={handleInputChange}
                type="text"
                id="firstName"
                value={formData.firstName}
                required
              />
            </div>
            <div className="last-name">
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={handleInputChange}
                type="text"
                id="lastName"
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email address *</label>
            <input
              onChange={handleInputChange}
              type="email"
              id="email"
              value={formData.email}
              required
            />
          </div>
          <div className="password-input">
            <div className="password">
              <label htmlFor="password">Password *</label>
              <input
                onChange={handleInputChange}
                type="password"
                id="password"
                value={formData.password}
                required
              />
            </div>
            <div className="confirm-password">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input
                onChange={handleInputChange}
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                required
              />
            </div>
          </div>
          {error && <p className="error-msg">{error}</p>}
          <div className="sign-up-bottom">
            <input className="button" type="submit" value={"Register"} />
            <Link className="sign-up-bottom-right" to={"/login"}>
              Log in
            </Link>
          </div>
        </form>
      </Section>
    </div>
  );
};
export default SignUp;
