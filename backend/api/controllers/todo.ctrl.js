const mongoose 	= require('mongoose'),
      todos      = mongoose.model('Todo');//require('../models/todo');


function getAllTodos (req, res){
    todos.find({}).exec(function(err, todos){
        if(err) throw  err;
        else{
            res.status(200);
            res.json(todos);
            //res.json({status: res.status, data: todos});
        }
    });
};

function insertTodo(req, res){
    var todo = new todos();
    todo.val= req.body.val;
    //console.log(todo);
    todo.save({todo},function(err, todo){
        if(err) throw  err;
        else {
            res.status(200);
            res.json(todo);
        }
    });
};

function deleteTodo(req,res){
    //console.log(req.params);
    todos.remove({"_id": req.params._id}, function(err, data){
        if(err) throw  err;
        else{
            res.status(200);
            res.json({status: true, message: "Todo deleted successfully!",id: req.body});
        }
    });
}

module.exports = {getAllTodos,insertTodo,deleteTodo};