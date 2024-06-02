import { Navigate } from "react-router-dom";
function Login({ handleAuth, isAuth }: propsInterface) {
    if (isAuth) return <Navigate to="/" replace />;
    else {
        return (
            <>
                <p>Login</p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        handleAuth(true);
                    }}
                >
                    Login
                </button>
            </>
        );
    }
}

interface propsInterface {
    handleAuth(isAuth: boolean): void;
    isAuth: boolean;
}
export default Login;
