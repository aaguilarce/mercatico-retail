'use strict';

const mongoose = require('mongoose'),
	      Schema = mongoose.Schema;

var bookSchema = new Schema({
  name: {
    type: String,
    required: true
	},
	description: [{
    type: String,
    required: true
  }],
	price: {
    type: String,
    required: true
  },
	published_date: {
    type: String,
    require:true
  },
	seller: [{
    type: String,
    required: true
  }],
	image64: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);
