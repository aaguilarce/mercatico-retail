const express      = require('express'),
      router       = express.Router(),
      users        = require('../models/user'),
      jwt          = require('express-jwt'),
      profileCtrl  = require('../controllers/profile.ctrl'),
      authCtrl     = require('../controllers/authentication.ctrl'),
      Product      = require('../models/product'),
      productCtrl  = require('../controllers/product.ctrl'),
      Category     = require('../models/category'),
      categoryCtrl = require('../controllers/category.ctrl'),
      Seller       = require('../models/seller'),
      sellerCtrl   = require('../controllers/seller.ctrl')
      config       = require('../config/auth');

var auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

// Profile
router.get('/api/profile', auth, profileCtrl.getprofile);

// Authentication
router.post('/api/register', authCtrl.register);
router.post('/api/login', authCtrl.login);
router.get('/api/users', auth, authCtrl.getAllUsers);

// Products
router.post('/api/products', auth, productCtrl.insertProduct);
router.get('/api/products', productCtrl.getAllProducts);
router.get('/api/products/:_id', productCtrl.getProduct);
router.delete('/api/products/:_id', auth, productCtrl.deleteProduct);
router.put('/api/products/:_id', auth, productCtrl.updateProduct);

// Categories
router.post('/api/categories', auth, categoryCtrl.insertCategory);
router.get('/api/categories', categoryCtrl.getAllCategories);
router.get('/api/categories/:_id', auth, categoryCtrl.getCategory);
router.delete('/api/categories/:_id',auth, categoryCtrl.deleteCategory);
router.put('/api/categories/:_id', auth, categoryCtrl.updateCategory);

// Sellers
router.post('/api/sellers', auth, sellerCtrl.insertSeller);
router.get('/api/sellers', sellerCtrl.getAllSellers);
router.get('/api/sellers/:_id', auth, sellerCtrl.getSeller);
router.delete('/api/sellers/:_id',auth, sellerCtrl.deleteSeller);
router.put('/api/sellers/:_id', auth, sellerCtrl.updateSeller);

module.exports = router;
