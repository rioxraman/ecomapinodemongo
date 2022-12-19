const {Product} = require('../models/product');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//create a product

router.post( '/create',async (req, res) => {
  
  let product = new Product({ name: req.body.name ,quantity: req.body.quantity});
  product = await product.save();
  
  res.send(product);
});
//create a product
router.get('/', async (req, res) => {
    
    const products = await Product.find().sort('name');
    res.send(products);
   
});
//update a product
router.put('/:id/update_quantity/', async (req, res) => {
 

  const product = await Product.findByIdAndUpdate(req.params.id,{$inc : {'quantity' : parseInt(req.query.number)}}, {
    new: true
  });

  if (!product) return res.status(404).send('The product with the given ID was not found.');
  
  res.send(product);
  
});
//fetch a product
router.delete('/:id', async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product) return res.status(404).send('The product with the given ID was not found.');

  res.send(product);
  
});
//optional get a product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).send('The product with the given ID was not found.');

  res.send(product);
});

module.exports = router;