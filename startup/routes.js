const express = require('express');
const products = require('../routes/products');

module.exports = function (app) {
app.use(express.json());
app.use('/products', products)  //initial link
}