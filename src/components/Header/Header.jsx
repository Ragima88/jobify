import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Sizer from "../Sizer/Sizer";
import Nav from "../Nav/Nav";
import "./header.scss";
import LoginButton from "../LoginButton/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";
import { logOut } from "../../store/slices/authSlice";

const Header = () => {
  const items = [
    { name: "Blog", href: "/blog", order: 5 },
    { name: "Categories", href: "/categories", order: 2 },
    { name: "Companies", href: "/companies", order: 4 },
    { name: "Locations", href: "/locations", order: 3 },
    { name: "Vacancies", href: "/vacancies", order: 1 },
    { name: "Sign up", href: "/sign-up", order: 6 },
  ];

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className={"header"}>
      <Container>
        <div className={"header-in"}>
          <Sizer width={"12.25rem"}>
            <Logo />
          </Sizer>
          <div className="header-right">
            <Nav items={items} />
            {isLoggedIn ? (
              <LogoutButton onClick={handleLogout} />
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
