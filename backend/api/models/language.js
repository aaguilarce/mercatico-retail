//todos model
const mongoose	= require('mongoose'),
	 Schema		= mongoose.Schema;

//Create schema for collection
var languageSchema = new Schema({
	name: { type: String , required: true},
}, {
    versionKey: false //Remove __v parameter for the data inserted in the database 
});

const Language = mongoose.model('Language', languageSchema);
