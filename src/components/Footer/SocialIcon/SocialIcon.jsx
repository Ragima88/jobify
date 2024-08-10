import { Link } from "react-router-dom";
import "./social-icon.scss";
import Image from "../../Image/Image";

const SocialIcon = ({ link, className, src, alt }) => {
  return (
    <Link className={`social-icon ${className}`} to={link}>
      <Image src={src} alt={alt} />
    </Link>
  );
};

export default SocialIcon;
