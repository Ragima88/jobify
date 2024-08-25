import { Link } from "react-router-dom";
import "./black-button.scss";
const BlackButton = ({ onClick, caption, href = null }) => {
  return href ? (
    <Link className="black-button" to={href}>
      {caption}
    </Link>
  ) : (
    <button onClick={onClick} className="black-button">
      {caption}
    </button>
  );
};
export default BlackButton;
