import { ADD_TO_CART, DELETE_FROM_CART } from "../ActionType/cartPageActionType";

const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

const deleteFromCart = (payload) => {
    console.log(payload, "payload")
    return {
        type: DELETE_FROM_CART,
        payload: payload
    }
}




export { addToCart, deleteFromCart };