'use strict';

const mongoose = require('mongoose'),
      Seller   = mongoose.model('Seller');

module.exports.getAllSellers = (req, res) => {
  Seller.find({}, (err, data) => {
    if (err) {
      res.status(404).json({ 'message': 'Not Found' });
    }
    else {
      res.status(200).json(data);
    }
  });
}

module.exports.insertSeller = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    let seller = new Seller();

    seller.name = req.body.name;
    seller.email = req.body.email;
    seller.address = req.body.address;

    seller.save({ seller }, (err, data) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports.deleteSeller = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Seller.remove({ '_id': req.params._id }, (err) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json({ status: true, message: 'Seller deleted successfully!' });
      }
    });
  }
}

module.exports.getSeller = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Seller.findById(req.params._id, (err, data) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports.updateSeller = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Seller.findById(req.params._id, (err, seller) => {
      if (err) {
        res.send(err);
      }
      else {
        seller.name = req.body.name;
        seller.email = req.body.email;
        seller.address = req.body.address;

        seller.save((err, data) => {
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
