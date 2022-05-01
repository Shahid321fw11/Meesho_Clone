import { ADD_TO_CART, DELETE_FROM_CART } from "../ActionType/cartPageActionType"

const initialState = {
    cartData: [],

}

const cartPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: [...state.cartData, action.payload],

            }

        case DELETE_FROM_CART:
            return {
                ...state,
                cartData: state.cartData.filter(item => item.id !== action.payload)
            }

        default:
            return state;

    }
}

export default cartPageReducer;