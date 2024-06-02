import { Link, NavLink } from "react-router-dom";

function Header({ isAuth }: { isAuth: boolean }) {
    return (
        <nav className="main-nav">
            <div className="container">
                <Link to="" className="brand">
                    One App
                </Link>
                <div className="nav-container">
                    {isAuth && (
                        <>
                            <NavLink className="" to="/">
                                Dashboard
                            </NavLink>

                            <NavLink className="" to="logout">
                                Logout
                            </NavLink>
                        </>
                    )}
                    {!isAuth && (
                        <>
                            <NavLink className="" to="login">
                                Login
                            </NavLink>
                            <NavLink className="" to="register">
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;
