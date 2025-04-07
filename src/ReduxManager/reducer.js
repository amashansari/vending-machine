const initialstate = {
 selectedProduct: [],
 insertedAmt: 0
};

const myReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT":
        return { ...state, selectedProduct: action.payload };
    case "INSERTED_AMOUNT":
        return { ...state, insertedAmt: action.payload };
    default:
      return state;
  }
};

export default myReducer;
