import "./login.scss";
import Section from "../../components/Section/Section";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/slices/authSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(formData));
    setFormData({
      email: "",
      password: "",
    });
  };
  return isLoggedIn ? (
    <Navigate to={"/"} />
  ) : (
    <div className="login-page">
      <Section className={"login-section"}>
        <h1>Login</h1>
        <div className="line"></div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="login-input">
            <label htmlFor="email">Email address *</label>
            <input
              onChange={handleInputChange}
              type="email"
              id="email"
              value={formData.email}
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password *</label>
            <input
              onChange={handleInputChange}
              type="password"
              id="password"
              value={formData.password}
            />
          </div>
          <input className="button" type="submit" value={"Log in"} />
        </form>
      </Section>
    </div>
  );
};
export default Login;
