var express  = require('express');
var router   = express.Router();
var passport = require('passport');

var api     = require('../../middleware/users');

router.get( '/', passport.authenticate('jwt', { session: false}), api.query);

module.exports = router; 