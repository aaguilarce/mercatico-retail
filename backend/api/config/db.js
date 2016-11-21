const mongoose  =require('mongoose'),
       dbURI    ='mongodb://localhost/Retail';

//Open database
mongoose.connect(dbURI);//para conectarse a la base de datos con mongoose
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('connected', function() {
	console.log("Mongoose is listening for connections at: "+dbURI);
});