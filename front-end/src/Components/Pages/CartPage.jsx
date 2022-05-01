import React from 'react'
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { List } from '@mui/material';
import Paper from '@mui/material/Paper';
import { margin } from '@mui/system';


const CartPage = () => {
    const selector = useSelector((state) => state.cartPageReducer.cartData);
    console.log(selector);


    return <>
        <List sx={{ width: '60%', bgcolor: 'background.paper', }}>
            {selector.map((e) => {
                return <>
                    {/* <Paper variant="outlined" elevation={3} > */}
                    <Card sx={{ margin: "10px", display: 'flex' }}>
                        <img src={e.images[0]} alt="image" style={{ border: "2px solid #ddd", borderRadius: '5', padding: "5px", maxWidth: "100px", minWidth: "100px", maxHeight: "100px", minHeight: "100px", marginTop: "auto", marginBottom: "auto" }} />

                        <CardContent>
                            <Typography variant="h6" >
                                {e.title}
                            </Typography>

                            <div style={{ display: 'flex' }}>
                                <Typography variant="overline" >Size:​{e.sizes}</Typography>
                                {/* <Typography style={{ textDecoration: 'line-through', marginLeft: '1rem', color: 'lightslategray' }}>{e.original_price}</Typography> */}
                                {/* <Typography style={{ marginLeft: '1rem', color: '#038D63' }}>{Math.floor(((e.original_price - e.discounted_price) / e.original_price) * 100)}% off</Typography> */}
                            </div>

                            <Typography style={{ color: 'lightslategray' }}>₹​{e.original_price - e.discounted_price}</Typography>


                        </CardContent>
                    </Card>
                    {/* </Paper> */}

                </>

            })}
        </List>
    </>
}

export default CartPage;