// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export function Nav({ loginStatus }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand me-auto" to="/">
                    Goals
                </Link>
                <ul className="navbar-nav d-flex">
                    {!loginStatus && (
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                    {loginStatus && (
                        <>
                            <li>
                                <Link to="/goals" className="nav-link">
                                    Goal
                                </Link>
                            </li>
                            <li>
                                <Link to="/logout" className="nav-link">
                                    Logout
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
