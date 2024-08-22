import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import "./sign-up.scss";
const SignUp = () => {
  return (
    <div className="sign-up">
      <Section className={"sign-up-section"}>
        <h1>Sign Up</h1>
        <div className="line"></div>
        <form>
          <div className="name-input">
            <div className="first-name">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>
            <div className="last-name">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email address *</label>
            <input type="text" id="email" />
          </div>
          <div className="password-input">
            <div className="password">
              <label htmlFor="password">Password *</label>
              <input type="password" id="password" />
            </div>
            <div className="confirm-password">
              <label htmlFor="confirm-password">Confirm Password *</label>
              <input type="password" id="confirm-password" />
            </div>
          </div>
          <div className="sign-up-bottom">
            <button>Register</button>
            <Link className="sign-up-bottom-right" to={""}>
              Log in
            </Link>
          </div>
        </form>
      </Section>
    </div>
  );
};
export default SignUp;
