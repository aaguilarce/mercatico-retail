'use strict';

const mongoose = require('mongoose'),
      Category = mongoose.model('Category');

module.exports.getAllCategories = (req, res) => {
  Category.find({}, (err, data) => {
    if (err) {
      res.status(404).json({ 'message': 'Not Found' });
    }
    else {
      res.status(200).json(data);
    }
  });
}

module.exports.insertCategory = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    let category = new Category();

    category.name = req.body.name;
    category.description = req.body.description;

    category.save({ category }, (err, data) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports.deleteCategory = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Category.remove({ '_id': req.params._id }, (err) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json({ status: true, message: 'Category deleted successfully!' });
      }
    });
  }
}

module.exports.getCategory = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Category.findById(req.params._id, (err, data) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports.updateCategory = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Category.findById(req.params._id, (err, category) => {
      if (err) {
        res.send(err);
      }
      else {
        category.name = req.body.name;
        category.description = req.body.description;

        category.save((err, data) => {
          if (err) {
            console.log(err);
            res.status(404).json({ 'message': 'Not Found' });
          }
          else {
            res.status(200).json(data);
          }
        });
      }
    });
  }
}
