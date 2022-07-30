export const auth = (body) => {
    return {
        type: "LOGIN_USER",
        payload: body,
    };
};
