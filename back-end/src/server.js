const express = require('express');
const dotenv = require('dotenv');
const connect = require('./config/db');

dotenv.config();


const app = express();
const port = process.env.PORT;


app.listen(port, async () => {
    await connect();
    console.log(`Server is running on port ${port}`);
})