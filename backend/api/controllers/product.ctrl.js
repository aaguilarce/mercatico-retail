'use strict';

const mongoose   = require('mongoose'),
      Product    = mongoose.model('Product'),
      Category   = mongoose.model('Category'),
      Seller     = mongoose.model('Seller'),
      cloudinary = require('cloudinary');

module.exports.getAllProducts = (req, res) => {
  Product.find({}).populate({ path: 'category', model: 'Category'}).populate({ path: 'seller', model: 'Seller'}).exec((err, data) => {
    if (err) {
      res.status(404).json({ 'message': 'Not Found' });
    }
    else {
      res.status(200).json(data);
    }
  });
}

module.exports.insertProduct = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    cloudinary.uploader.upload(req.body.image64, (result) => {

      let product = new Product();
      let category = new Category();
      let seller = new Seller();

      product.name = req.body.name;
      product.description = req.body.description;
      product.price = req.body.price;
      product.published_date = req.body.published_date;
      product.seller = req.body.seller;
      product.image64 = result.url;
      product.quantity = req.body.quantity;

      category._id = req.body.category._id;
      category.name = req.body.category.name;
      category.description = req.body.category.description;
      product.category = category;

      seller._id = req.body.seller._id;
      seller.name = req.body.seller.name;
      seller.email = req.body.seller.email;
      seller.address = req.body.seller.address;
      product.seller = seller;

      product.save({ product }, (err, data) => {
        if (err) {
          console.log(err.message);
          res.status(404).json({ 'message': 'Not Found' });
        }
        else {
          res.status(200).json(data);
        }
      });
    });
  }
};

module.exports.deleteProduct = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Product.remove({ '_id': req.params._id }, (err) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json({ status: true, message: 'product deleted successfully!' });
      }
    });
  }
}

module.exports.getProduct = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    Product.findById(req.params._id).populate({ path: 'category', model: 'Category'}).populate({ path: 'seller', model: 'Seller'}).exec((err, data) => {
      if (err) {
        res.status(404).json({ 'message': 'Not Found' });
      }
      else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports.updateProduct = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({ 'message': 'UnauthorizedError: private data' });
  }
  else {
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

    Product.findById(req.params._id, (err, product) => {
      if (err) {
        res.send(err);
      }
      else {
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.published_date = req.body.published_date;
        product.seller = req.body.seller;
        product.quantity = req.body.quantity;

        let category = new Category();
        let seller = new Seller();

        category._id = req.body.category._id;
        category.name = req.body.category.name;
        category.description = req.body.category.description;
        product.category = category;

        seller._id = req.body.seller._id;
        seller.name = req.body.seller.name;
        seller.email = req.body.seller.email;
        seller.address = req.body.seller.address;
        product.seller = seller;

        if (base64regex.test(req.body.image64)) {
          cloudinary.uploader.upload(req.body.image64, (result) => {
            product.image64 = result.url;
          });
        }
        else {
          product.image64 = req.body.image64;
        }

        product.save((err, data) => {
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
