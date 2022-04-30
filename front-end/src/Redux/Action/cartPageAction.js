import { ADD_TO_CART } from "../ActionType/cartPageActionType";

const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }

}

export { addToCart };