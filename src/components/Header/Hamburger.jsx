import Image from "../Image/Image";
import closeIcon from "./icons/close.png";
import menuIcon from "./icons/menu.png";

const Hamburger = ({ isOpen, setOpen }) => {
  const handleClose = () => {
    return setOpen(false);
  };
  const handleOpen = () => {
    return setOpen(true);
  };
  return (
    <div className={"humburger"}>
      {isOpen ? (
        <Image onClick={handleClose} src={closeIcon} />
      ) : (
        <Image onClick={handleOpen} src={menuIcon} />
      )}
    </div>
  );
};

export default Hamburger;
