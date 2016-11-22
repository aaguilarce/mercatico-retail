const mongoose = require('mongoose'),
    books = mongoose.model('Book'),
    cloudinary = require('cloudinary');;


function insertBook(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        cloudinary.uploader.upload(req.body.image64, function (result) {
            console.log(result.url);
            //save book
            var book = new books();
            book.name = req.body.name;
            book.description = req.body.description;
            book.price = req.body.price;
            book.published_date = req.body.published_date;
            book.seller = req.body.seller;
            book.image64 = req.body.image64;
            book.quantity = req.body.quantity;
            
            book.save({ book }, function (err, book) {
                if (err) {
                    console.log(err);
                    res.status(404).json({
                        "message": "Not Found"
                    });
                }
                else {
                    res.status(200);
                    res.json(book);
                }
            });
        });
    }
};

function getAllBooks(req, res) {
    books.find({}).exec(function (err, books) {
        if (err) {
            console.log(err);
            res.status(404).json({
                "message": "Not Found"
            });
        }
        else {
            res.status(200);
            res.json(books);
        }
    });
};


function getBook(req, res) {
    books.findById(req.params._id, function (err, book) {
        if (err) {
            console.log(err);
            res.status(404).json({
                "message": "Not Found"
            });
        }
        else {
            res.status(200);
            res.json(book);
        }
    });
};

function deleteBook(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        // Otherwise continue
        books.remove({ "_id": req.params._id }, function (err, book) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                res.status(200);
                res.json({ status: true, message: "Book deleted successfully!", id: req.params._id });
            }
        });
    }
}

function updateBook(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        // Otherwise continue
        books.findById(req.params._id, function (err, book) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                if (req.body.image_base64 != null) {
                    cloudinary.uploader.upload(req.body.image_base64, function (result) {
                        book.image_path = result.url;//url of the image
                        book.title = req.body.title;
                        book.authors = req.body.authors;
                        book.published_date = req.body.published_date;
                        book.price = req.body.price;
                        book.categories = req.body.categories;
                        book.state = req.body.state;
                        book.best_seller = req.body.best_seller;
                        book.languages = req.body.languages;
                        book.publisher_id = req.body.publisher_id;
                        book.quantity = req.body.quantity;
                        book.save({ book }, function (err, book) {
                            if (err) {
                                console.log(err);
                                res.status(404).json({
                                    "message": "Not Found"
                                });
                            }
                            else {
                                res.status(200);
                                res.json(book);
                            }
                        });
                    });
                }
                else {
                    book.title = req.body.title;
                    book.authors = req.body.authors;
                    book.published_date = req.body.published_date;
                    book.price = req.body.price;
                    book.categories = req.body.categories;
                    book.state = req.body.state;
                    book.best_seller = req.body.best_seller;
                    book.image_path = req.body.image_path;
                    book.languages = req.body.languages;
                    book.publisher_id = req.body.publisher_id;
                    book.quantity = req.body.quantity;
                    book.save({ book }, function (err, book) {
                        if (err) {
                            console.log(err);
                            res.status(404).json({
                                "message": "Not Found"
                            });
                        }
                        else {
                            res.status(200);
                            res.json(book);
                        }
                    });
                }

            }
        });
    }
};

module.exports = { insertBook, getAllBooks, getBook, deleteBook, updateBook };