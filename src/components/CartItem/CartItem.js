import React, { useState } from "react";
import "./CartItem.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HighlightOffIcon from "@mui/icons-material/HighlightOff"; 

const CartItem = (props) => {
    return (
        <div className="CartItem">
            <div className="cartItemImg">
                <img src={props.data.image} alt="" />
            </div>
            <div className="cardItemDetails">
                <div className="name">{props.data.title}</div>
                <div className="cartItemprice">Rs. {props.data.amount}</div>
                <div className="quantity">
                    <AddIcon
                        onClick={() =>
                            props.addToCartFunc(props, props.data.quantity + 1)
                        }
                        className="cc"
                    />
                    <input
                        type="number"
                        className="numb"
                        value={props.data.quantity}
                    />
                    <RemoveIcon
                    
                        onClick={() =>  
                            props.data.quantity===0?props.addToCartFunc(props, props.data.quantity):props.addToCartFunc(props, props.data.quantity - 1)
                        }
                        className="cc"
                    />
                </div>
            </div>
            <div className="action">
                <HighlightOffIcon />
            </div>
        </div>
    );
};

export default CartItem;
