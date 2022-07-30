import React, { useEffect, useState } from "react";
import "./ProductThumbnail.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/action";

const ProductThumbnail = () => {
    const [state, setState] = useState([]);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer);
    useEffect(() => {
        axios.get("http://localhost:5000/products").then((resp) => {
            if (resp.status === 200) {
                setState(resp.data);
            }
        });
    }, []);
    const addToCartFunc = (product) => {
        let findIndex = cart.cart.findIndex((item) => item.id === product.id);
        if (findIndex > -1) {
            debugger;
            return alert("Product already exists!");
        }
        dispatch(addToCart({ ...product, quantity: 1 }));
    };
    return (
        <div className="all">
            {state &&
                state.map((product) => (
                    <div className="ProductThumbnail" key={product.id}>
                        <div className="itemImg">
                            <img
                                className="abc"
                                src={product.image}
                                alt="image"
                                onClick={() => {
                                    navigate("/product/" + product.id);
                                }}
                            />
                        </div>

                        <div className="itemDetails">
                            <div
                                className="itemName"
                                onClick={() => {
                                    navigate("/product/" + product.id);
                                }}
                            >
                                <p>{product.title}</p>
                                <p>₹ {product.amount}</p>
                                <span className="rating">{product.rating}</span>
                            </div>
                            <div className="itemOption">
                                <FavoriteIcon style={{cursor:'pointer'}} />
                                <div onClick={() => addToCartFunc(product)} style={{cursor:'pointer'}}>
                                    <AddShoppingCartIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProductThumbnail;
