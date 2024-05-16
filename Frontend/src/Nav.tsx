// import { Link } from "react-router-dom";

import { useState } from "react";
import { Link } from "react-router-dom";

export function Nav() {
    const [isLogin, setIsLoging] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand me-auto" to="/">
                    Goals
                </Link>
                <ul className="navbar-nav d-flex">
                    {!isLogin && (
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
                    {isLogin && (
                        <>
                            <li>
                                <a
                                    className="nav-link active"
                                    href="javascript:void(0)"
                                >
                                    Dashboard
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
