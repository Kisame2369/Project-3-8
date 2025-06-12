import { NavLink } from "react-router-dom";
import css from "./AuthHeader.module.css";

export default function AuthHeader() {
  return (
    <div className={css.authWrapper}>
      <NavLink to="/login" className={css.authLink}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.authLink}>
        Register
      </NavLink>
    </div>
  );
}
