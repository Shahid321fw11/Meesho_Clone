const express = require('express');
const connect = require('./config/db');
const app = express();
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const productController = require('./Controllers/productController');
app.use('/product', productController);


app.listen(port, async () => {
    await connect();
    console.log(`Server is running on port ${port}`);
})