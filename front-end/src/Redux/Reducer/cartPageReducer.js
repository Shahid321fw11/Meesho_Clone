import { ADD_TO_CART } from "../ActionType/cartPageActionType"

const initialState = {
    cartData: [],
}

const cartPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: [...state.cartData, action.payload]
            }
        default:
            return state;

    }
}

export default cartPageReducer;