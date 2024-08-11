import { Link } from "react-router-dom";
import "./white-button.scss";

const WhiteButton = ({ src, text }) => {
  return (
    <Link className={"white-button"} to={src}>
      {text}
    </Link>
  );
};
export default WhiteButton;
