import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Sizer from "../Sizer/Sizer";
import Nav from "../Nav/Nav";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/slices/authSlice";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Header = () => {
  const items = [
    { name: "Blog", href: "/blog", order: 5 },
    { name: "Categories", href: "/categories", order: 2 },
    { name: "Companies", href: "/companies", order: 4 },
    { name: "Locations", href: "/locations", order: 3 },
    { name: "Vacancies", href: "/vacancies", order: 1 },
    { name: "Sign up", href: "/sign-up", order: 6 },
  ];

  const [isOpen, setOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className={"header"}>
      <Container>
        <div className={"header-in"}>
          <Sizer className={"z-logo"} width={"12.25rem"}>
            <Logo />
          </Sizer>
          <div className="header-right">
            <Nav
              items={items}
              isOpen={isOpen}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
            <Hamburger isOpen={isOpen} setOpen={setOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
