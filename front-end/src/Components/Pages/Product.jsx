import React, { useState } from 'react';
import Data from '../../data/db';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


console.log(Data)
const Product = () => {
    return <>
        <div style={{ display: "flex" }}>
            {
                Data.map((e) => {
                    return <>
                        <Card sx={{ maxWidth: 300, margin: "10px" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="{e.image}"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {e.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {e.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </>
                })
            }
        </div>
    </>
}

export default Product;