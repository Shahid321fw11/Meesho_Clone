const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.URI;

const connect = () => {
    console.log('Connecting to MongoDB...');
    return mongoose.connect(URI);
}


module.exports = connect;
