/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */

var webpack = require('webpack');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel?stage=1', exclude: [/client\/lib/, /node_modules/, /\.spec\.js/] },
      //For font-awesome 
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]//grid system
  },
  plugins: [
        // jQuery
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'        
        })
    ],
};
