const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.URI;

const app = express();
const port = 3000;

const connect = () => {
    console.log('Connecting to MongoDB...');
    return mongoose.connect(URI);
}

app.listen(port, async () => {
    await connect();
    console.log(`Server is running on port ${port}`);
})