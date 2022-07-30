import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { fetchData } from "../../utils/fetch";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { buyNow, addToCart } from "../../redux/cart/action";

const ProductDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer);
    const [state, setState] = useState(null);
    let { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:5000/products/" + id).then((resp) => {
            if (resp.status === 200) {
                setState(resp.data);
            }
        });
    }, []);

    const orderProduct = () => {
        dispatch(buyNow({ ...state, quantity: 1 }));
        navigate("/cart");
    };
    const addToCartFunc = () => {
        let findIndex = cart.cart.findIndex((item) => item.id === state.id);
        if (findIndex > -1) {
            return alert("Product already exists!");
        }
        dispatch(addToCart({ ...state, quantity: 1 }));
    };
    return (
        state && (
            <div className="ProductDetails">
                <div className="productImage">
                    <img src={state.image} />
                </div>
                <div className="productBrief">
                    <div className="upper">
                        <div className="productName">
                            <h1>{state.title}</h1>
                            <FavoriteBorderIcon className="favIcon" />
                        </div>
                        <div className="aboutProduct">{state.description}</div>
                        <div className="productPrice">
                            <h1>₹{state.amount}</h1>
                        </div>
                    </div>
                    <div className="lower">
                        <button className="buy" onClick={orderProduct}>
                            Buy Now
                        </button>
                        <button className="basket" onClick={addToCartFunc}>
                            Add to Basket
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductDetails;
