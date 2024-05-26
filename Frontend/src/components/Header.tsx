import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="main-nav">
            <div className="container">
                <Link to="" className="brand">
                    One App
                </Link>
                <div className="nav-container">
                    <NavLink className="" to="/">
                        Dashboard
                    </NavLink>

                    <NavLink className="" to="login">
                        Login
                    </NavLink>

                    <NavLink className="" to="register">
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
