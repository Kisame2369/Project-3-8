import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserIsLogin from "../UserIsLogin/UserIsLogin";
import AuthHeader from "../AuthHeader/AuthHeader";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppHeader() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                
                {isLoggedIn && (
                    <NavLink to="/contacts">Contacts</NavLink>
                )}

                {isLoggedIn ? <UserIsLogin /> : <AuthHeader />}
            </nav>
        </header>
    );
}
