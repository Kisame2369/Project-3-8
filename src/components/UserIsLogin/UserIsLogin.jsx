import { useDispatch, useSelector } from "react-redux";
import css from "./UserIsLogin.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserIsLogin() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Hi, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}