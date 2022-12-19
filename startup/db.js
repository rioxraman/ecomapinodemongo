
const mongoose = require('mongoose'); //lib

module.exports=function(params) {
    mongoose.connect('mongodb://localhost/ecomapi')  //db server 
    .then(() => console.log('Connected to MongoDB...'))
  
}