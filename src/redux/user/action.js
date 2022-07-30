export const createUser = (body) => {
    return {
        type: "CREATE_USER",
        payload: body,
    };
};
