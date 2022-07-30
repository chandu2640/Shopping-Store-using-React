const inititalState = { cart: [], order: null };
const authReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] };
        }
        case "ADD_QUANTITY": {
            return { ...state, cart: action.payload };
        }
        case "BUY_NOW": {
            return { ...state, order: action.payload };
        }
    }
    return state;
};
export default authReducer;
