import Image from "../Image/Image";
import LogoBlack from "./images/jobify-logo-black.svg";
import LogoGray from "./images/jobify-logo-gray.svg";
import "./logo.scss";

const Logo = ({ color = "black" }) => {
  const currentImage = color === "gray" ? LogoGray : LogoBlack;
  return (
    <Image
      className={`logo ${color}-logo`}
      src={currentImage}
      alt={"Jobify logo black"}
    />
  );
};
export default Logo;
