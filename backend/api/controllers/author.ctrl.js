const mongoose 	= require('mongoose'),
      authors      = mongoose.model('Author');


function getAllAuthors(req, res){
    authors.find({}).exec(function(err, authors){
        if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
        else{
            res.status(200);
            res.json(authors);
        }
    });
};

function insertAuthors(req, res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        var author = new authors();
        author.name= req.body.name;
    
        author.save({author},function(err, author){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(author);
            }
        });
    }
};

function deleteAuthors(req,res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        authors.remove({"_id": req.params._id}, function(err, data){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else{
                res.status(200);
                res.json({status: true, message: "Author deleted successfully!"});
            }
        });
    }
}

function getAuthor(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        authors.findById(req.params._id, function (err, author) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(author);
            }
        });
    }
};

function updateAuthors (req, res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        // Otherwise continue
        authors.findById(req.params._id,function(err, author){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else{
                author.name= req.body.name;
                author.save({author},function(err, author){
                    if (err) {
                        console.log(err);
                        res.status(404).json({
                            "message" : "Not Found"
                        });
                    }
                    else {
                        res.status(200);
                        res.json(author);
                    }
                });
            }
        });
    }
};
module.exports = {getAllAuthors,insertAuthors,deleteAuthors,updateAuthors,getAuthor};