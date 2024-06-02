// import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { useState } from "react";
import ProtectRoute from "./components/ProtectRoute";
import Logout from "./components/pages/Logout";

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const handelIsAuth = (authValue: boolean) => {
        setIsAuth(authValue);
    };
    return (
        <>
            <Header isAuth={isAuth} />
            <Routes>
                <Route element={<ProtectRoute isAuth={isAuth} />}>
                    <Route path="" element={<Dashboard />} />
                    <Route
                        path="logout"
                        element={<Logout handleAuth={handelIsAuth} />}
                    />
                </Route>
                <Route
                    path="login"
                    element={
                        <Login handleAuth={handelIsAuth} isAuth={isAuth} />
                    }
                />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
