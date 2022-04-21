import React, { useState } from 'react';
import Data from '../../data/db';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// {
//     "_id": "624403caad2d86aa6ca236ca",
//         "id": 3,
//             "category": "Sarees",
//                 "title": "Kanchipuram Silk Orange",
//                     "original_price": 676,
//                         "discounted_price": 576,
//                             "sizes": [
//                                 "Free Size"
//                             ],
//                                 "images": [
//                                     "https://images.meesho.com/images/products/72014181/r9xva_512.jpg",
//                                     "https://images.meesho.com/images/products/71051237/bzflu_64.jpg"
//                                 ],
//                                     "details": {
//         "Fabric": "Chiffon",
//             "Pattern": "Self Design",
//                 "Multipack": "Single",
//                     "Description": "Best qaualtiy "
//     },
//     "rating": 2.9,
//         "seller_id": 3
// },

console.log(Data)
const Product = () => {
    return <>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                Data.map((e) => {
                    return <>
                        <Card sx={{ maxWidth: 300, margin: "10px" }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={e.images[0]}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {e.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {e.description}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    ${e.price}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">{e.rating.count}</Button>
                                <Button size="small">{e.rating.rate}</Button>
                            </CardActions>
                        </Card>

                    </>
                })
            }
        </div>
    </>
}

export default Product;