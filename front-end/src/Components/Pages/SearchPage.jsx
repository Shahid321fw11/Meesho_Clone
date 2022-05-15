import React, { useContext } from 'react'
import { AppContext } from '../../Context/searchContext';
import Card from '@mui/material/Card';
import StarRateIcon from '@mui/icons-material/StarRate';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const SearchPage = ({ productData }) => {

    const { setSearch_2, serchValue } = useContext(AppContext);
    return <>
        <div style={{ marginTop: "10%", fontSize: 'large', fontWeight: 'bolder', marginLeft: '2%', marginRight: '2%' }} >
            <h1>Products Related with your search...</h1>
        </div>
        {<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
            {
                productData.filter((e) => {
                    if (serchValue === '') {
                        return e;
                    }
                    else if (e.title.toLocaleLowerCase().includes(serchValue.toLocaleLowerCase())) {
                        return e;
                    }
                    else if (e.category.toLocaleLowerCase().includes(serchValue.toLocaleLowerCase())) {
                        return e;
                    }


                }).map((e) => {
                    return <>
                        <Card sx={{ width: '18rem', margin: "10px" }}>
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
        }
    </>
}

export default SearchPage;