import { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

type userType = {
    name: string;
    email: string;
    mobileNumber: number;
    countryCode: string;
    password: string;
};

export function SingUp({ setIsLoginPass }) {
    const [user, setUser] = useState<userType>({
        name: "",
        email: "",
        mobileNumber: 0,
        countryCode: "",
        password: "",
    });

    const navigate = useNavigate();

    function handelUser(e: React.ChangeEvent<HTMLInputElement>) {
        setUser((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    }
    async function handelClick() {
        try {
            const data = await axios.post(
                "http://localhost:3000/user/register",
                {
                    ...user,
                }
            );

            console.log(data);
            setIsLoginPass(true);
            navigate("/goals");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <p style={{ color: "#fff" }}>{JSON.stringify(user)}</p>
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "calc(100vh - 56px)",
                }}
            >
                <div
                    className="card p-3"
                    style={{ margin: "auto", maxWidth: "300px" }}
                >
                    <h3 className="text-center">Register</h3>
                    <form>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Name</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., Logesh"
                                name="name"
                                onChange={handelUser}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Country Code</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., +91"
                                name="countryCode"
                                onChange={handelUser}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Mobile Number</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., 9876543210"
                                name="mobileNumber"
                                onChange={handelUser}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Email</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., test@domain.com"
                                name="email"
                                onChange={handelUser}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Enter your Password"
                                name="password"
                                onChange={handelUser}
                            />
                        </div>
                        <div className="text-end mt-2">
                            <button
                                type="button"
                                className="btn btn-danger me-1 btn-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={handelClick}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
