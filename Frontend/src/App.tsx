// import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SingIn } from "./SignIn";
import { SingUp } from "./SignUp";
import { Nav } from "./Nav";

function App() {
    return (
        <BrowserRouter>
            <>
                <Nav />
                <Routes>
                    <Route path="/" Component={SingUp} />
                    <Route path="/login" Component={SingIn} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;
