// import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SingIn } from "./SignIn";
import { SingUp } from "./SignUp";
import { Nav } from "./Nav";
import { ShowGoals } from "./Goals";
import { useState } from "react";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <BrowserRouter>
            <>
                <Nav loginStatus={isLogin} />
                <Routes>
                    <Route path="/" Component={SingUp} />
                    <Route path="/login" Component={SingIn} />
                    <Route path="/goals" Component={ShowGoals} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;
