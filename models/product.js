const mongoose = require('mongoose');

//schema moongose 
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },quantity: { 
    type: Number, 
    required: true,
    min: 0,
    max: 255
  },
});

const Product = mongoose.model('Product', productSchema);



exports.productSchema = productSchema;
exports.Product = Product; 