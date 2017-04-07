var config = require('../../config/config');
var utilLib = require('../lib/util');
var path = require('path');

module.exports = {
    index : function(req, res){
        var filename = 'index.html';
        var root = config['development'].clientRoot;
        utilLib.sendFile(res, filename, root);
    },
    managePartials : function(req, res){
        var filename = path.join(__dirname, req.params.templatefolder, req.params.name + '.html');
        var type = req.params.type;
        utilLib.sendFile(req, filename, root);
    }
}