const mongoose 	= require('mongoose'),
      categories      = mongoose.model('Category');


function getAllCategories(req, res){
    categories.find({}).exec(function(err, categories){
        if (err) {
            console.log(err);
            res.status(404).json({
                "message" : "Not Found"
            });
        }
        else{
            res.status(200);
            res.json(categories);
        }
    });
};

function insertCategories(req, res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        var category = new categories();
        category.name= req.body.name;
    
        category.save({category},function(err, category){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(category);
            }
        });
    }
};

function deleteCategories(req,res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        categories.remove({"_id": req.params._id}, function(err, data){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else{
                res.status(200);
                res.json({status: true, message: "Category deleted successfully!"});
            }
        });
    }
}

function getCategory(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        categories.findById(req.params._id, function (err, category) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(category);
            }
        });
    }
};

function updateCategories(req, res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        // Otherwise continue
        categories.findById(req.params._id,function(err, category){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else{
                category.name= req.body.name;
                category.save({category},function(err, category){
                    if (err) {
                        console.log(err);
                        res.status(404).json({
                            "message" : "Not Found"
                        });
                    }
                    else {
                        res.status(200);
                        res.json(category);
                    }
                });
            }
        });
    }
};
module.exports = {getAllCategories,insertCategories,deleteCategories,updateCategories,getCategory};