import { Link } from "react-router-dom";
import "./white-button.scss";

const WhiteButton = ({ className = "", href, text }) => {
  return (
    <Link className={`${className} white-button`} to={href}>
      {text}
    </Link>
  );
};
export default WhiteButton;
