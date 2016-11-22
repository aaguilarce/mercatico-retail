'use strict';

const mongoose = require('mongoose'),
         Book  = mongoose.model('Book'),
    cloudinary = require('cloudinary');

module.exports.getAllBooks = (req, res) => {
  Book.find({}, (err, data) => {
    if (err) {
      res.status(404).json({ 'message': 'Not Found' });
    }
    else {
      res.status(200).json(data);
    }
  });
}

module.exports.insertBook = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    cloudinary.uploader.upload(req.body.image64, (result) => {

      let book = new Book();

      book.name = req.body.name;
      book.description = req.body.description;
      book.price = req.body.price;
      book.published_date = req.body.published_date;
      book.seller = req.body.seller;
      book.image64 = result.url;
      book.quantity = req.body.quantity;

      Book.save({ book }, (err, book) => {
        if (err) {
          res.status(404).json({ 'message': 'Not Found' });
        }
        else {
          res.status(200).json(data);
        }
      });
    });
  }
};

module.exports.deleteBook = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Book.remove({ '_id': req.params._id }, (err) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json({ status: true, message: 'Book deleted successfully!' });
      }
    });
  }
}

module.exports.getBook = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Book.findById(req.params._id, (err, data) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports.updateBook = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    let book = new Category();

    book.name = req.body.name;
    book.description = req.body.description;
    book.price = req.body.price;
    book.published_date = req.body.published_date;
    book.seller = req.body.seller;
    book.quantity = req.body.quantity;

    if (req.body.image64 != null) {
      cloudinary.uploader.upload(req.body.image64, (result) => {
        book.image64 = result.url;
      });
    }
    else {
      book.image64 = req.body.image64;
    }

    Book.findOneAndUpdate(req.params._id, book, (err, data) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json(data);
      }
    });
  }
}
