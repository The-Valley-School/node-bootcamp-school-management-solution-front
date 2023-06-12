import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        Home
      </NavLink>
      <NavLink to="/classroom" className="header__link">
        Classroom
      </NavLink>
      <NavLink to="/subject" className="header__link">
        Subject
      </NavLink>
      <NavLink to="/user" className="header__link">
        User
      </NavLink>
      <NavLink to="/login" className="header__link">
        Login
      </NavLink>
    </header>
  );
};

export default Header;
