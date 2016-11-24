'use strict';

const mongoose = require('mongoose'),
	    Schema   = mongoose.Schema;

var sellerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Seller = mongoose.model('Seller', sellerSchema);
