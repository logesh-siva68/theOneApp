// import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
