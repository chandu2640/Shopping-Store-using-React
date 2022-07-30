export const addToCart = (body) => {
    return {
        type: "ADD_TO_CART",
        payload: body,
    };
};
export const ADD_QUANTITY = (body) => {
    return {
        type: "ADD_QUANTITY",
        payload: body,
    };
};
export const buyNow = (body) => {
    return {
        type: "BUY_NOW",
        payload: body,
    };
};
