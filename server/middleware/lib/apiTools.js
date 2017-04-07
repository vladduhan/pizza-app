var path = require('path');

var helper = function(res, err, data){
    if (err) {
        if(res && res.status && err.status)
            res.status(err.status).end();
    }
    else
    {
        res.status(200).send(data);
    }
};

module.exports.helper = helper;