import { Link } from "react-router-dom";
import "./login-button.scss";

const LoginButton = () => {
  return (
    <Link className="login-button" to={""}>
      Login
    </Link>
  );
};
export default LoginButton;
