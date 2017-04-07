var express = require('express');
var router  = express.Router();
var authentication = require('../../middleware/lib/authentication');

router.post( '/register', authentication.register);

router.post( '/authenticate', authentication.authenticate);


module.exports = router; 