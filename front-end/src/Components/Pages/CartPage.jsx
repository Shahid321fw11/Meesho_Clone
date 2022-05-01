import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deleteFromCart } from '../../Redux/Action/cartPageAction';


const CartPage = () => {
    const [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
    const [discounted_price, setDiscountedPrice] = useState(0);
    const selector = useSelector((state) => state.cartPageReducer.cartData);
    console.log(selector);
    console.log(selector.length);

    const dispatch = useDispatch();

    const rem_from_cart = (id) => {
        console.log(id, 'removed');
        dispatch(deleteFromCart(id));
    }



    const fun_total = () => {
        let sumOriginalPrice = 0;
        let sumDiscountedPrice = 0;
        for (let i = 0; i < selector.length; i++) {
            sumOriginalPrice += selector[i].original_price;
            sumDiscountedPrice += selector[i].discounted_price;
        }
        setTotalOriginalPrice(sumOriginalPrice);
        setDiscountedPrice(sumDiscountedPrice);
    }

    useEffect(() => {
        fun_total();
    }, [selector]);

    return <>
        <div style={{ marginTop: "10%", fontSize: 'large', fontWeight: 'bolder', marginLeft: '2%', marginRight: '2%' }} >
            <h1></h1>
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <div style={{ width: "50%" }}>
                {selector.map((e) => {
                    return <>
                        <Card sx={{ margin: "10px", display: 'flex' }}>
                            <img src={e.images[0]} alt="image" style={{ border: "2px solid #ddd", borderRadius: '5', padding: "5px", maxWidth: "100px", minWidth: "100px", maxHeight: "100px", minHeight: "100px", marginTop: "auto", marginBottom: "auto" }} />

                            <CardContent>
                                <Typography variant="h6" >
                                    {e.title}
                                </Typography>

                                <div style={{ display: 'flex' }}>
                                    <Typography variant="overline" >Size:​{e.sizes}</Typography>
                                </div>

                                <Typography style={{ color: 'lightslategray' }}>₹​{e.original_price - e.discounted_price}</Typography>
                                <button type='button' style={{ backgroundColor: 'rgba(245, 40, 145, 0.8)', color: 'white', border: 'none', borderRadius: '5px', padding: '5px', marginTop: '10px' }} onClick={() => rem_from_cart(e.id)} >Remove</button>
                            </CardContent>
                        </Card>
                    </>
                })}
            </div>
            <div style={{ margin: 10, width: '30%' }}>
                {selector.length > 0 ? <>
                    <Card >
                        <CardContent>
                            <Typography variant="h6" display='block'>Price Details</Typography>
                            <Typography variant='overline' display='block' >Product Charge : ₹{totalOriginalPrice}</Typography>
                            <Typography variant='overline' display='block' >Discounted : ₹​{discounted_price}</Typography>
                            <Typography variant='overline' display='block' >Total Amount : ₹{totalOriginalPrice - discounted_price}</Typography>
                        </CardContent>
                    </Card>
                </> : <></>}
            </div>
        </div>
    </>
}

export default CartPage;