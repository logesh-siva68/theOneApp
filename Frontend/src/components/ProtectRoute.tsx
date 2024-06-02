import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectRoute({ isAuth }: { isAuth: boolean }) {
    const location = useLocation();
    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="login" state={{ from: location }} replace />
    );
}

export default ProtectRoute;
