const router = require('express').Router();
const Product = require('../Models/product.models');

// router.route('/').get((req, res) => {
//     Product.find()
//         .then(products => res.json(products))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/add').post((req, res) => {
    const id = req.body.id;
    const category = req.body.category;
    const title = req.body.title;
    const original_price = req.body.original_price;
    const discounted_price = req.body.discounted_price;
    const sizes = req.body.sizes;
    const images = req.body.images;
    const details = req.body.details;
    const rating = req.body.rating;
    const seller_id = req.body.seller_id;

    const newProduct = new Product({
        id,
        category,
        title,
        original_price,
        discounted_price,
        sizes,
        images,
        details,
        rating,
        seller_id,
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.export = router;


