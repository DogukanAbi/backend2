const mongoose = require('mongoose');
const productList = require('../product');

const orderSchema = new mongoose.Schema({
    products: [
      {
        productName: String,
        price: Number,
        quantity: Number
      }
    ],
    totalPrice: Number
  }, { timestamps: true });


  
  const Order = mongoose.model('Order', orderSchema);
  
  module.exports = Order;