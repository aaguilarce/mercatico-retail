'use strict';

const mongoose = require('mongoose'),
	      Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Category = mongoose.model('Category', categorySchema);
