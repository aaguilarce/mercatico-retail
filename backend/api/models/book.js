//todos model
const mongoose	= require('mongoose'),
	 Schema		= mongoose.Schema;

//Create schema for collection
var bookSchema = new Schema({
	title: { type: String , required: true},
	authors: [{ type: String , required: true}],
	published_date: { type: Date , required: true},
	price: { type: String , required: true},
	categories: [{ type: String , required: true}],
	state: {type: String, require:true},
	best_seller: {type: Boolean, require:true},
	image_path: { type: String , required: true},
	languages: [{ type: String , required: true}],
	publisher: {type: String , required: true},
	quantity: {type: Number , required: true}
}, {
    versionKey: false //Remove __v parameter for the data inserted in the database 
});

const Book = mongoose.model('Book', bookSchema);//Get model of collection todos in TodoApp
//module.exports=Todo;