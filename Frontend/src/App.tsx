// import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SingIn } from "./SignIn";
import { SingUp } from "./SignUp";
import { Nav } from "./Nav";
import { ShowGoals } from "./Goals";
import { useEffect, useState } from "react";
import { Logout } from "./Logout";

function App() {
    const [isLogin, setIsLogin] = useState(false);

    function handelSetLogin(val: boolean) {
        setIsLogin(val);
    }
    useEffect(() => {}, [isLogin]);
    return (
        <BrowserRouter>
            <>
                <Nav loginStatus={isLogin} />
                <Routes>
                    <Route
                        path="/"
                        element={<SingUp setIsLoginPass={handelSetLogin} />}
                    />
                    <Route path="/login" element={<SingIn />} />
                    <Route
                        path="/goals"
                        element={<ShowGoals isLogin={isLogin} />}
                    />
                    <Route
                        path="/logout"
                        element={<Logout setIsLoginPass={handelSetLogin} />}
                    />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;
