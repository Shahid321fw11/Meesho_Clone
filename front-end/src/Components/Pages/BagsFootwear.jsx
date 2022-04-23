import React, { useEffect, useState } from 'react';
import Data from '../../data/db'
import Card from '@mui/material/Card';
import StarRateIcon from '@mui/icons-material/StarRate';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

var data_dresses = Data.filter((e) => {
    if (e.category === 'Bags and Footwear') {
        return e;
    }
})

const BagsFootwear = () => {
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [array, setArray] = useState([]);
    const postsPerPage = 10;
    useEffect(() => {
        const start = currentPage * postsPerPage - postsPerPage;
        const end = currentPage * postsPerPage;
        setArray(data_dresses.slice(start, end));
    }, [currentPage]);

    return <>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
            {
                array.map((e) => {
                    if (e.category === 'Bags and Footwear') {
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
                    }
                })
            }
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <button style={{ margin: '2%' }} onClick={() => { setCurrentPage(currentPage - 1) }} disabled={currentPage <= 1}>prev</button>
            <button style={{ margin: '2%' }} onClick={() => { setCurrentPage(currentPage + 1) }} disabled={currentPage === Math.floor(data_dresses.length / postsPerPage) + 1}  >Next</button>
        </div>

    </>
}

export default BagsFootwear;

