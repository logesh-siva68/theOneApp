import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ShowGoals({ isLogin }) {
    const navigate = useNavigate();
    if (!isLogin) {
        navigate("/");
        return;
    }
    return (
        <>
            <p>Goals works</p>
        </>
    );
}
