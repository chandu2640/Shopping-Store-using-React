import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/user/action";

const Register = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState(null);
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    const user = useSelector((state) => state.userReducer);

    const CreateUserFunc = (e) => {
        e.preventDefault();
        let isUser = user.user.find(
            (user) =>
                user.email === state.email && user.password === state.password
        );
        if (isUser) {
            setError("User Already registered!");
            return;
        }
        dispatch(createUser(state));
        navigate("/login");
    };
    return (
        <div className="login">
            <h1 className="loginTitle">Register</h1>
            <form action="" className="loginForm" onSubmit={CreateUserFunc}>
                <p style={{ color: "red" }}>{error}</p>
                <br />
                <input
                    onChange={(e) =>
                        setState((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                        }))
                    }
                    type="text"
                    className="fname"
                    placeholder="First Name"
                />
                <input
                    onChange={(e) =>
                        setState((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                        }))
                    }
                    type="text"
                    className="lname"
                    placeholder="Last Name"
                />
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
                            navigate("/login");
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        Exsiting User? Login your account.
                    </p>
                    <button className="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
