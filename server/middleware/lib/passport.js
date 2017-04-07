var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../../models/user');
var config = require('../../config/config');

module.exports = function(passport){
    var opts = {};
    opts.secretOrKey = config.development.secret;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    passport.use(new JwtStrategy(opts, function(jwt_payload, done){
       User.findOne({_id: jwt_payload._id}, function(err, user){
           if(err){
               return done(err, false);
           }
           if(user){
               done(null, user);
           } else {
               done(null, false);
           }
       }); 
    })); 
};