import { Link } from "react-router-dom";
import "./green-button.scss";

const GreenButton = ({ src, text }) => {
  return (
    <Link className={"green-button"} to={src}>
      {text}
    </Link>
  );
};
export default GreenButton;
