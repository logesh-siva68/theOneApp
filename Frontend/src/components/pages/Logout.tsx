import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Logout({ handleAuth }: any) {
    useEffect(() => {
        handleAuth(false);
    });
    return (
        <>
            <Navigate to="/login" replace />
        </>
    );
}

export default Logout;
