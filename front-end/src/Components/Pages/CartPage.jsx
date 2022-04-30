import React from 'react'
import { useSelector } from 'react-redux';



const CartPage = () => {
    const selector = useSelector((state) => state.cartPageReducer.cartData);
    console.log(selector);


    return <>
        <h1>Cart Page</h1>
    </>
}

export default CartPage;