const inititalState = { user: [] };
const authReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "CREATE_USER": {
            return { ...state, user: [...state.user, action.payload] };
        }
    }
    return state;
};
export default authReducer;
