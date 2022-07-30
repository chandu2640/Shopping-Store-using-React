import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/getUser";

const Header = (props) => {
    let navigate = useNavigate();
    return (
        <div className="header">
            <div className="logo">
                <h1
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    ShopKart
                </h1>
            </div>

            <div className="menu">
                <p
                    onClick={() => {
                        navigate("/productList");
                    }}
                    className="abc"
                >
                    Products
                </p>
                {!props.user.data && !getUser() ? (
                    <p
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="abc"
                    >
                        Login
                    </p>
                ) : (
                    <p
                        onClick={() => {
                            props.handleLogout();
                        }}
                        className="abc"
                    >
                        Logout
                    </p>
                )}
                <ShoppingCartIcon
                    className="cartIcon abc"
                    onClick={() => {
                        navigate("/cart");
                    }}
                />
                <p>{props.cart.cart.length}</p>
            </div>
        </div>
    );
};

export default Header;
