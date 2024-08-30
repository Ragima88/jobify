import { Link } from "react-router-dom";
import "./nav.scss";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Nav = ({ items, isOpen, isLoggedIn, handleLogout }) => {
  const sortedItems = [...items].sort((a, b) => a.order - b.order);
  const elements = sortedItems.map((item) => {
    return (
      <Link className={"navigation-link"} key={item.name} to={item.href}>
        {item.name}
      </Link>
    );
  });

  return (
    <nav className={`navigation ${isOpen ? "open" : ""}`}>
      {elements}
      {isLoggedIn ? <LogoutButton onClick={handleLogout} /> : <LoginButton />}
    </nav>
  );
};
export default Nav;
