var user        = require('../bzl/api').User;
var apiTools    = require('./lib/apiTools');
var jwt         = require('jwt-simple');
var config      = require('../config/config');

getToken = function(headers){
    if(headers && headers.authorization){
        var parted = headers.authorization.split(' ');
        if(parted.length === 2){
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};



function queryUsers(userContext, options, next){
    user.query(userContext, options, function(err, data){
        next(err, data)
    })
};

function findOne(userContext, options, next){
    user.findOne(userContext, options, function(err, data){
        next(err, data)
    })
};


module.exports = {
    query : function(req, res, next){
        var token = getToken(req.headers);
        var userid = req.query.userid;
        if(token){
            var userContext = jwt.decode(token, config.development.secret);
            if(userid == "myprofile"){
                userid = userContext._id;
                findOne(userContext, { _id: userid}, function(err, data){
                    apiTools.helper(res, err, data)
                })
            }
            else{
                queryUsers({}, {}, function(err, data){
                    apiTools.helper(res, err, data)
                })
            }
        }
        else {
            res.status(403).send({success: false, msg: 'No token provided.'});
        }
    }

};