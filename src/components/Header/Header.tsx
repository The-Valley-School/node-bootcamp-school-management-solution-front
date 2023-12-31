import { useContext } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";
import { ROL } from "../../models/User";

const Header = (): JSX.Element => {
  const authInfo = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header__home">
        <NavLink to="/" className="header__link">
          Home
        </NavLink>
      </div>

      {authInfo?.userInfo && (authInfo?.userInfo?.rol === ROL.ADMIN || authInfo?.userInfo?.rol === ROL.TEACHER) && (
        <>
          <NavLink to="/classroom" className="header__link">
            Classroom
          </NavLink>
          <NavLink to="/subject" className="header__link">
            Subject
          </NavLink>
          <NavLink to="/user" className="header__link">
            User
          </NavLink>
        </>
      )}

      <div className="header__user-info">
        {authInfo?.userInfo ? (
          <>
            <span className="header__name"> Hola {authInfo.userInfo.firstName},</span>
            <span className="header__logout" onClick={authInfo.logout}>
              salir
            </span>
          </>
        ) : (
          <NavLink to="/login" className="header__link">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
