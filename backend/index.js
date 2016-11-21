//Node todo list backend main entry point
const express		=require('express'),//No se pone el path porque esta en node_modules
	  morgan		=require('morgan'),
	  mongoose		=require('mongoose'),
	  bodyParser 	= require('body-parser'),
	  app 			=express(),//const express devuelve una función. Se invoca.;
	  path			= require('path'),
	  routes 		= require('./api/routes/index'), //routes are defined here
	  favicon 		= require('serve-favicon'),
	  cookieParser 	= require('cookie-parser'),
	  passport 		= require('passport'),
	  cloudinary = require('cloudinary');


cloudinary.config({ 
  cloud_name: 'dbcxvzrm6', 
  api_key: '976273925376112', 
  api_secret: '4AXf0HFxUnZm-WNGuZW_zp6vPs0' 
});

//log info to the console
app.use(morgan('dev'));//le dice al app que utilice morgan. Imprime en modo developer

app.use(function(req, res, next) {
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

//serve statics files
app.use(express.static(path.join(__dirname,'client')));

//Body-parser
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json 
app.use(bodyParser.json()); 
//mount router module on api/route
app.use("/",routes);	

//Initialise Passport before using the route middleware
app.use(passport.initialize());

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

require('./api/config/db');
require('./api/config/passport');



//inicia el server
app.listen(8080,function(err){
	if(err) throw err;
	console.log('Server started on port: '+8080);
});