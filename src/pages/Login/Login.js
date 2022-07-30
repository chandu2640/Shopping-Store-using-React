import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/auth/action";

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const user = useSelector((state) => state.userReducer);
    const [state, setState] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        let isUser = user.user.find(
            (user) =>
                user.email === state.email && user.password === state.password
        );
        if (isUser) {
            dispatch(auth(state));
            localStorage.setItem("user", JSON.stringify(state));
            navigate("/");
        } else {
            setError("Invalid email or password!");
        }
    };
    return (
        <div className="Login">
            <h1 className="loginTitle">Login</h1>
            <form action="" onSubmit={handleSubmit} className="loginForm">
                <p style={{ color: "red" }}>{error}</p>
                <br />
                <input
                    type="email"
                    className="email"
                    placeholder="Email Address"
                    onChange={(e) =>
                        setState((prev) => ({ ...prev, email: e.target.value }))
                    }
                />
                <input
                    type="password"
                    className="pass"
                    placeholder="Password"
                    onChange={(e) =>
                        setState((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                />

                <div className="others">
                    {/* <Link to="abc.com">New user? Create an account</Link> */}
                    <p
                        onClick={() => {
                            navigate("/register");
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        New user? Create an account
                    </p>

                    <button className="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
