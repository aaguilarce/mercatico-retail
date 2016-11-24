'use strict';

const mongoose = require( 'mongoose' ),
      Schema	 = mongoose.Schema,
      crypto   = require('crypto'),
      jwt      = require('jsonwebtoken'),
      config   = require('../config/auth');

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String,
  type: {
    type: String,
    required: true
  }
});

userSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = (password) => {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = () => {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    type: this.type,
    exp: parseInt(expiry.getTime() / 1000),
  }, config.secret);
};

const User = mongoose.model('User', userSchema);
