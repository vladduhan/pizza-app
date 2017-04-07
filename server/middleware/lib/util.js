var path = require('path');

var sendFile = function(res, filename, root){
    res.sendFile(filename, { root: path.join(__dirname, root) },
    function(err){
        if (err) {
            if(res && res.status && err.status)
                 res.status(err.status).end();
        }
        else
        {

        }
    })
}

module.exports.sendFile = sendFile;