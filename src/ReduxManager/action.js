export const selectedPro = (product) => {
    return {
        type: "SELECTED_PRODUCT",
        payload: product,
    };
};

export const insertedAmount = (amount) => {
    return {
        type: "INSERTED_AMOUNT",
        payload: amount,
    };
};