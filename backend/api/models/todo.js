//todos model
const mongoose	= require('mongoose'),
	 Schema		= mongoose.Schema;

//Create schema for collection
var todoSchema = new Schema({
	val: { type: String , required: true}
}, {
    versionKey: false //Remove __v parameter for the data inserted in the database 
});

const Todo = mongoose.model('Todo', todoSchema);//Get model of collection todos in TodoApp
//module.exports=Todo;