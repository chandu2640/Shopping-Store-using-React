import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductThumbnail from "./components/ProductThumbnail/ProductThumbnail";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./redux/auth/action";
import Home from "./pages/Home/Home";

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cartReducer);
    const handleLogout = () => {
        dispatch(auth(null));
        localStorage.removeItem("user");
    };
    const props = {
        user,
        handleLogout,
        cart,
    };

    return (
        <div>
            <Router>
                <Header {...props} />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/productList" element={<ProductThumbnail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
