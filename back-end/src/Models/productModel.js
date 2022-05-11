// step 1 : create a model Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    original_price: {
        type: Number,
        required: true
    },
    discounted_price: {
        type: Number,
        required: true
    },
    sizes: {
        type: Array,
    },
    images: {
        type: Array,
    },
    details: {
        type: Object,
    },
    rating: {
        type: Number,
    },
    seller_id: {
        type: Number,
    }
}, { versionKey: false });




// step 2 : connect the schema to the database
const Product = mongoose.model('Product', productSchema);
module.exports = Product;


