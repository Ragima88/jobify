import "./login.scss";
import Section from "../../components/Section/Section";

const Login = () => {
  return (
    <Section className={"login-section"}>
      <h1>Login</h1>
      <div className="line"></div>
      <form>
        <div className="login-input">
          <label htmlFor="username">Username or email address *</label>
          <input type="text" id="username" />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password *</label>
          <input type="password" id="password" />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <button>Log in</button>
      </form>
    </Section>
  );
};
export default Login;
