import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Sizer from "../Sizer/Sizer";
import Nav from "../Nav/Nav";
import "./header.scss";
import Login from "../LoginButton/LoginButton";

const Header = () => {
  const items = [
    { name: "Blog", href: "/blog", order: 4 },
    { name: "Companies", href: "/companies", order: 3 },
    { name: "Regions", href: "/regions", order: 2 },
    { name: "Vacancies", href: "/vacancies", order: 1 },
    { name: "Sign up", href: "/sign-up", order: 5 },
  ];

  return (
    <header className={"header"}>
      <Container>
        <div className={"header-in"}>
          <Sizer width={"12.25rem"}>
            <Logo />
          </Sizer>
          <div className="header-right">
            <Nav items={items} />
            <Login />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
