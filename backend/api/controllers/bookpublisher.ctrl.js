const mongoose 	= require('mongoose'),
      bookspublishers      = mongoose.model('BookPublisher');


function getAllBookPublishers (req, res){
    bookspublishers.find({}).exec(function(err, bookspublishers){
        if (err) {
            console.log(err);
            res.status(404).json({
                "message" : "Not Found"
            });
        }
        else{
            res.status(200);
            res.json(bookspublishers);
        }
    });
};

function insertBookPublishers(req, res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        var bookpublisher = new bookspublishers();
        bookpublisher.name= req.body.name;
        bookpublisher.year_founded= req.body.year_founded;
        bookpublisher.location= req.body.location;
    
        bookpublisher.save({bookpublisher},function(err, bookpublisher){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(bookpublisher);
            }
        });
    }
};

function deleteBookPublishers(req,res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        bookspublishers.remove({"_id": req.params._id}, function(err, data){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else{
                res.status(200);
                res.json({status: true, message: "Book Publisher deleted successfully!"});
            }
        });
    }
}

function getPublisher(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        bookspublishers.findById(req.params._id, function (err, publisher) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(publisher);
            }
        });
    }
};

function updateBookPublishers (req, res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        // Otherwise continue
        bookspublishers.findById(req.params._id,function(err, bookpublisher){
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message" : "Not Found"
                });
            }
            else{
                bookpublisher.name= req.body.name;
                bookpublisher.year_founded= req.body.year_founded;
                bookpublisher.location= req.body.location;
                bookpublisher.save({bookpublisher},function(err, bookpublisher){
                    if (err) {
                        console.log(err);
                        res.status(404).json({
                            "message" : "Not Found"
                        });
                    }
                    else {
                        res.status(200);
                        res.json(bookpublisher);
                    }
                });
            }
        });
    }
};
module.exports = {getAllBookPublishers,insertBookPublishers,deleteBookPublishers,updateBookPublishers,getPublisher};