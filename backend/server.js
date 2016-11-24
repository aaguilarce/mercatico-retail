const express		   = require('express'),
	    morgan		   = require('morgan'),
	    mongoose		 = require('mongoose'),
	    bodyParser 	 = require('body-parser'),
	    path			   = require('path'),
	    routes 		   = require('./api/routes/index'),
	    favicon 		 = require('serve-favicon'),
	    cookieParser = require('cookie-parser'),
	    passport 		 = require('passport'),
	    cloudinary   = require('cloudinary'),
      app 			   = express();

cloudinary.config({
  cloud_name: 'dbcxvzrm6',
  api_key: '976273925376112',
  api_secret: '4AXf0HFxUnZm-WNGuZW_zp6vPs0'
});

app.use(morgan('dev'));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true}));

app.use("/", routes);

app.use(passport.initialize());

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

require('./api/config/db');
require('./api/config/passport');

app.listen(process.env.PORT || 3000, (err) => {
	if(err) throw err;
	console.log('Server started on port: ' + process.env.PORT || 3000);
});
