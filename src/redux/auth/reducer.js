const inititalState = { data: null };
const authReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "LOGIN_USER": {
            debugger;
            return { ...state, data: action.payload };
        }
    }
    return state;
};
export default authReducer;
