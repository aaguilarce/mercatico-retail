const mongoose = require( 'mongoose' ),
      Schema		= mongoose.Schema,
      crypto = require('crypto'),
      jwt = require('jsonwebtoken'),
      config = require('../config/auth'); // get auth config file;

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
}, {
    versionKey: false //Remove __v parameter for the data inserted in the database 
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    type: this.type,
    exp: parseInt(expiry.getTime() / 1000),//token expiraton
  }, config.secret); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

const User =mongoose.model('User', userSchema);