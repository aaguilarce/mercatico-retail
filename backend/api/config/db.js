const mongoose = require('mongoose'),
       dbURI   = 'mongodb://admin:admin@ds053774.mlab.com:53774/mercatico-retail';

mongoose.connect(dbURI);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.on('connected',() => {
	console.log("Mongoose is listening for connections at: "+dbURI);
});
