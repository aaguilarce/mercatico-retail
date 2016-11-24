'use strict';

const mongoose = require('mongoose'),
      Category = require('./category'),
      Seller   = require('./seller'),
	    Schema   = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: true
	},
	description: {
    type: String,
    required: true
  },
	price: {
    type: String,
    required: true
  },
	published_date: {
    type: String,
    require:true
  },
	image64: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Category'
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Seller'
  }
});

const Product = mongoose.model('Product', productSchema);
