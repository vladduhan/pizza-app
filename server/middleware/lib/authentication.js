var User = require('../../models/user')
var jwt  = require( 'jwt-simple' );
var config = require( '../../config/config');

function register(req, res){
    if(!req.body.email || !req.body.password){
        res.json({success: false, msg: 'Please pass name adn password.'});
    } else {
        var newUser = new User({
            firstName   : req.body.firstName,
            lastName    : req.body.lastName,
            email       : req.body.email,
            password    : req.body.password
        });

        newUser.save(function(err){
            if(err) {
                return res.json({success: false, msg: 'Username already exists'});
            }
            res.json({success: true, msg: 'Successful created new user'})
        })
    }
};

function authenticate(req, res){
    User.findOne({
        email: req.body.email
    }, function(err, user){
        if(err) throw new err;

        if(!user){
            res.send({success: false, msg: 'Authententication failed'});
        } else {
            user.comparePassword(req.body.password, function(err, isMatch){
                if (isMatch && !err){
                    var token = jwt.encode(user, config.development.secret);
                    res.json({success: true, token:'JWT ' + token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password'});
                }
            });
        }
    });
};


module.exports.register = register;
module.exports.authenticate = authenticate;