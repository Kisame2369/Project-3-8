import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserIsLogin from "../UserIsLogin/UserIsLogin";
import AuthHeader from "../AuthHeader/AuthHeader";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${css.navlink} ${css.active}` : css.navlink}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={({ isActive }) => isActive ? `${css.navlink} ${css.active}` : css.navlink}>
            Contacts
          </NavLink>
        )}

        {isLoggedIn ? <UserIsLogin /> : <AuthHeader />}
      </nav>
    </header>
  );
}
