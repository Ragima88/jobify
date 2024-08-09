import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = ({ items }) => {
  const sortedItems = [...items].sort((a, b) => a.order - b.order);
  const elements = sortedItems.map((item) => {
    return (
      <Link className={"navigation-link"} key={item.name} to={item.href}>
        {item.name}
      </Link>
    );
  });

  return <nav className={"navigation"}>{elements}</nav>;
};
export default Nav;
