import { Link } from "react-router-dom";
import "./green-button.scss";

const GreenButton = ({ src, text, className }) => {
  return (
    <Link className={`green-button ${className}`} to={src}>
      {text}
    </Link>
  );
};
export default GreenButton;
