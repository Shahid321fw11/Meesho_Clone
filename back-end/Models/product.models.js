const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    original_price: {
        type: Number,
        required: true,
    },
    discounted_price: {
        type: Number,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    details: {
        type: Object,
        required: true,
        default: {
            "Fabric": "Chiffon",
            "Pattern": "Self Design",
            "Multipack": "Single",
            "Description": "Best qaualtiy ",
        },
    },
    rating: {
        type: Number,
        required: true,
    },
    seller_id: {
        type: Number,
        required: true,
    },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


