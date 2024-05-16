import styles from "./SignUp.module.css";
export function SingUp() {
    return (
        <>
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
                    <h3 className="text-center">Login</h3>
                    <form>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Name</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., Logesh"
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Email</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., logesh@test.com"
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Enter your Password"
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Country Code</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., +91"
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label className="form-label">Mobile Number</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g., 9876543210"
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
