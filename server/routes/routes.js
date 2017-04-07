var express        = require('express');
var authentication = require('./api/authentication');
var usersApi       = require('./api/users');

module.exports = function(app){
    /* static routes */
    
    app.use('/', require('./assets/statics'));
    
    app.use('/', authentication);
    
    /** data routes  */
    
    // users
    app.use('/api/users', usersApi);

    
    /** falback routes  */

    app.all('*', require('./assets/fallback'));
    
}