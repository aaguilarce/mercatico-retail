const mongoose = require('mongoose'),
    languages = mongoose.model('Language');


function getAllLanguages(req, res) {
    languages.find({}).exec(function (err, languages) {
        if (err) {
            console.log(err);
            res.status(404).json({
                "message": "Not Found"
            });
        }
        else {
            res.status(200);
            res.json(languages);
        }
    });
};

function insertLanguages(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        var language = new languages();
        language.name = req.body.name;

        language.save({ language }, function (err, language) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(language);
            }
        });
    }
};

function deleteLanguages(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        languages.remove({ "_id": req.params._id }, function (err, data) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                res.status(200);
                res.json({ status: true, message: "Language deleted successfully!" });
            }
        });
    }
}

function getLanguage(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        languages.findById(req.params._id, function (err, language) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                res.status(200);
                res.json(language);
            }
        });
    }
};

function updateLanguages(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private data"
        });
    } else {
        // Otherwise continue
        languages.findById(req.params._id, function (err, language) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    "message": "Not Found"
                });
            }
            else {
                language.name = req.body.name;
                language.save({ language }, function (err, language) {
                    if (err) {
                        console.log(err);
                        res.status(404).json({
                            "message": "Not Found"
                        });
                    }
                    else {
                        res.status(200);
                        res.json(language);
                    }
                });
            }
        });
    }
};
module.exports = { getAllLanguages, insertLanguages, deleteLanguages, updateLanguages,getLanguage };