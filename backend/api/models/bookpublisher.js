//todos model
const mongoose	= require('mongoose'),
	 Schema		= mongoose.Schema;

//Create schema for collection
var bookPublisherSchema = new Schema({
	name: { type: String , required: true},
    year_founded: { type: String , required: true},
    location: { type: String , required: true}
}, {
    versionKey: false //Remove __v parameter for the data inserted in the database 
});

const BookPublisher = mongoose.model('BookPublisher', bookPublisherSchema);//Get model of collection bookspublishers in TodoApp
