import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    cartReducer: cartReducer,
    userReducer: userReducer,
});

export default rootReducer;
