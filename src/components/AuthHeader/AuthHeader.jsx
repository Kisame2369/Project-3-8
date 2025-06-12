import { NavLink } from "react-router-dom";


export default function AuthHeader() {
    return (
        <div>
            <NavLink  to="/login">
                Log In
            </NavLink>
            <NavLink  to="/register">
                Register
            </NavLink>

        </div>
    );
}