import React from 'react'
import Card from '@mui/material/Card';
import StarRateIcon from '@mui/icons-material/StarRate';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Action/cartPageAction';

const IndividualPage = () => {
    const dispatch = useDispatch();
    const productSelector = useSelector((state) => state.productPageReducer.data);
    console.log(productSelector);

    const on_click_func = (productSelector) => {
        dispatch(addToCart(productSelector));
    }



    return <>
        <div style={{ marginTop: "10%", fontSize: 'large', fontWeight: 'bolder', marginLeft: '2%', marginRight: '2%' }} >
            <h1></h1>
        </div>

        <div style={{ display: 'flex', justifyContent: "center", }}>

            <div style={{ width: "30%", marginRight: '5% ' }}>
                <div >
                    <Paper variant="outlined" elevation={3} >
                        <Card sx={{ maxWidth: "80%", display: "block", marginLeft: 'auto', marginRight: 'auto' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={productSelector.images[0]}
                            />
                        </Card>
                    </Paper>
                    <Button variant="contained" style={{ width: '100%', backgroundColor: 'rgb(244, 51, 151)', marginTop: '5%' }} onClick={() => on_click_func(productSelector)} >Add To Cart</Button>
                </div>
            </div>


            <div style={{ width: "30%" }}>

                <Paper variant="outlined" >
                    <div style={{ margin: '5%' }}>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            {productSelector.title}
                        </Typography>
                        <div style={{ display: 'flex' }}>
                            <Typography style={{ fontWeight: 'bold', fontSize: 24 }}>₹​{productSelector.discounted_price}</Typography>
                            <Typography style={{ textDecoration: 'line-through', marginLeft: '1rem', color: 'lightslategray', marginTop: '0.5rem' }}>{productSelector.original_price}</Typography>
                            <Typography style={{ marginLeft: '1rem', color: '#038D63', marginTop: '0.5rem' }}>{Math.floor(((productSelector.original_price - productSelector.discounted_price) / productSelector.original_price) * 100)}% off</Typography>
                        </div>
                        <div style={{ display: 'flex', height: '20%', maxWidth: '22%', border: '', backgroundColor: '#038D63', borderRadius: '40%', alignItems: 'center' }}>
                            <Typography style={{ marginLeft: '5px' }}>{productSelector.rating} </Typography>
                            <Typography style={{}}><StarRateIcon /> </Typography>
                        </div>
                        <div>
                            <Typography style={{ color: 'lightslategray', marginTop: '0.5rem' }}>₹​{productSelector.original_price - productSelector.discounted_price} discounted on first price</Typography>

                        </div>
                    </div>
                </Paper>

                <Paper variant="outlined" >
                    <div style={{ margin: '5%' }}>
                        <Typography variant="h6" component="div"> Product Details</Typography>
                        <Typography variant="overline" component="div" >NAME : {productSelector.title}</Typography>
                        <Typography variant="overline" component="div" >{productSelector.title}</Typography>
                        <Typography variant="overline" component="div" >CATEGORY : {productSelector.category}</Typography>
                        <Typography variant="overline" component="div" >SIZES : {productSelector.sizes}</Typography>
                    </div>
                </Paper>

            </div>
        </div>
    </>
}

export default IndividualPage;
