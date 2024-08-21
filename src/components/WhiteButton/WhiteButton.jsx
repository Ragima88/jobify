import { Link } from "react-router-dom";
import "./white-button.scss";

const WhiteButton = ({ className, src, text }) => {
  return (
    <Link className={`${className} white-button`} to={src}>
      {text}
    </Link>
  );
};
export default WhiteButton;
