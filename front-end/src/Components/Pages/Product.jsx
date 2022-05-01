import React, { useState } from 'react';
import Data from '../../data/db';
import Card from '@mui/material/Card';
import StarRateIcon from '@mui/icons-material/StarRate';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { productPageAction } from '../../Redux/Action/productPageAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Product = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const funDispatch = (data) => {
        dispatch(productPageAction(data));
    }


    return <>
        <div style={{ marginTop: "10%", fontSize: 'large', fontWeight: 'bolder', marginLeft: '2%', marginRight: '2%' }} >
            <h1>Home Page</h1>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
            {
                Data.map((e) => {
                    return <>
                        <Card sx={{ width: '18rem', margin: "10px" }} onClick={() => {
                            funDispatch(e);
                            { navigate("/ProductPage") }

                        }}
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image={e.images[0]}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" style={{ fontSize: "small" }}>
                                    {e.title}
                                </Typography>

                                <div style={{ display: 'flex' }}>
                                    <Typography style={{ fontWeight: 'bold', }}>₹​{e.discounted_price}</Typography>
                                    <Typography style={{ textDecoration: 'line-through', marginLeft: '1rem', color: 'lightslategray' }}>{e.original_price}</Typography>
                                    <Typography style={{ marginLeft: '1rem', color: '#038D63' }}>{Math.floor(((e.original_price - e.discounted_price) / e.original_price) * 100)}% off</Typography>

                                </div>

                                <Typography style={{ color: 'lightslategray' }}>₹​{e.original_price - e.discounted_price} discount on first order</Typography>

                                <div style={{ display: 'flex', height: '20%', maxWidth: '22%', border: '', backgroundColor: '#038D63', borderRadius: '40%', alignItems: 'center' }}>
                                    <Typography style={{ marginLeft: '5px' }}>{e.rating} </Typography>
                                    <Typography style={{}}><StarRateIcon style={{}} /> </Typography>

                                </div>

                            </CardContent>
                        </Card>

                    </>
                })
            }
        </div>
    </>
}

export default Product;