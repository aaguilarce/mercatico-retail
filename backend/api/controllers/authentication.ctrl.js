const mongoose 	= require('mongoose'),
      User      = mongoose.model('User'),
      passport  = require('passport');

function register (req, res){
    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
	user.type= req.body.type;
	console.log(user);
    user.setPassword(req.body.password);

    user.save(function(err) {
      var token;
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    });
}

function login (req,res){
	passport.authenticate('local', function(err, user, info){
		var token;
		// If Passport throws/catches an error
		if (err) {
			res.status(404).json(err);
			return;
		}
		// If a user is found
		if(user){
			token = user.generateJwt();
			res.status(200);
			res.json({
				"token" : token
			});
		} else {
			// If user is not found

			res.status(401).json(info);
		}
  	})(req, res);
}

function getAllUsers(req, res){
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private data"
      });
    } else {
        User.find({},"_id email name type").exec(function (err, users) {
        if (err) {
            console.log(err);
            res.status(404).json({
                "message": "Not Found"
            });
        }
        else {
            res.status(200);
            res.json(users);
        }
    });
    }
};

module.exports = {register,login,getAllUsers};

