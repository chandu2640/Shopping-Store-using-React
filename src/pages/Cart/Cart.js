import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { addToCart, ADD_QUANTITY } from "../../redux/cart/action";
import "./Cart.css";
// import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer);
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    // const submitOrder = () => {
    //     alert(
    //         "you order is placed the total price is " +
    //             (Number(cart.order.amount * cart.order.quantity) +
    //                 Number(
    //                     cart.cart.reduce(
    //                         (prev, next) => prev + next.amount * next.quantity,
    //                         0
    //                     )
    //                 ))
    //     );
    // };
    const addToCartFunc = (state, count) => {
        debugger;
        let localstore = [...cart.cart];
        let index = localstore.findIndex((item) => item.id === state.data.id);
        if (index > -1) {
            localstore[index].quantity = count;
        }
        dispatch(ADD_QUANTITY(localstore));
    };
    return (
        <div className="cartPage">
            <div className="Cart">
                <div className="cartItem">
                    <div className="cartProduct">
                        <h2>My Cart</h2>
                        <div className="BasketItems">
                            {cart.cart &&
                                cart.cart.map((cartItem) => (
                                    <CartItem
                                        data={cartItem}
                                        addToCartFunc={addToCartFunc}
                                    />
                                ))}
                            {cart.order && (
                                <CartItem
                                    data={cart.order}
                                    addToCartFunc={addToCartFunc}
                                />
                            )}
                        </div>
                    </div>
                    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{marginTop:'50px'}}>
        ORDER NOW
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="tick">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png" alt="" />
            </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign={"center"} id="alert-dialog-slide-description">
            <Typography variant="h4">Order Placed Successfully</Typography>
            <Typography variant="p" >It will be delivered in 5 days</Typography> 
          </DialogContentText>
        </DialogContent>
        <Button  className="okBtn">
          <Button variant="contained" onClick={handleClose}>OK</Button>
        </Button>
      </Dialog>
    </div>

                </div>
                <div className="price">
                    <h2>Price Details</h2>
                    <div className="priceComponent">
                        {cart.cart &&
                            cart.cart.map((cartItem) => (
                                <div className="pp">
                                    <span>Price</span>
                                    <span>{cartItem.amount} * {cartItem.quantity}</span>
                                </div>
                            ))}
                        {cart.order && (
                            <div className="pp">
                                <span>Price</span>
                                <span>{cart.order.amount}</span>
                            </div>
                        )}
                        <hr />
                    </div>
                    <div className="total">
                        <h2>
                            <div className="pp">
                                <span>Total</span>{" "}
                                <span>
                                    {cart.order &&
                                        cart.order.amount *
                                            cart.order.quantity +
                                            cart.cart.reduce(
                                                (prev, next) =>
                                                    prev +
                                                    next.amount * next.quantity,
                                                0
                                            )}
                                    {cart.cart.length !== 0 &&
                                        cart.cart.reduce(
                                            (prev, next) =>
                                                prev +
                                                next.amount * next.quantity,
                                            0
                                        )}
                                </span>{" "}
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
