const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');

// crud api for product

// post a product 
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
});

// get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

// update a product by id
router.patch('/:id', async (req, res) => {
    const _id = req.params.id;
    const product = await Product.findByIdAndUpdate(_id, req.body);
    res.send(product);
});

// delete a product by id
router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    const product = await Product.findByIdAndDelete(_id);
    res.send(product);
});


// get a product by id
router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    const product = await Product.findById(_id);
    res.send(product);
});




module.exports = router;


