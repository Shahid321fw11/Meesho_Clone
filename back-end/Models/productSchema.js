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
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const productSchema = new Schema({
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


