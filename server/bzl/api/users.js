var User = require('../../models/user');

function query(userContext, options, next){
    User.find({}, function(err, data){
        next(err, data);
    })
}
function findOne(userContext, options, next){
    User.findOne(options, function(err, data){
        next(err, data);
    })
}


module.exports = {
    query : query,
    findOne : findOne
}