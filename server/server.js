
var express         = require( 'express' );
var app             = express();
var cookieParser    = require( 'cookie-parser' );
var morgan          = require( 'morgan' );
var csrf            = require( 'csurf' );
var path            = require( 'path' );
var bodyParser      = require( 'body-parser' );
var methodOverride  = require( 'method-override' );
var session         = require( 'express-session' );
var argv            = require( 'minimist' )( process.argv )
var mongoose        = require( 'mongoose');
var passport	    = require( 'passport');
var jwt             = require( 'jwt-simple' );
// var redis           = require( 'redis');
var RedisStore      = require('connect-redis')(session);  
var conf = require( './config/config' );

mongoose.connect(conf.development.db);

var port = process.env.PORT || 8080;

app.use( bodyParser.json() );

app.use( bodyParser.json({ type: 'application/vnd.api+json'} ) );

app.use( bodyParser.urlencoded( { extended : false } ) );

//log to console
app.use(morgan('dev'));

//use passport package in our app
app.use(passport.initialize());

app.use( methodOverride( 'X-HTTP-Method-Override' ) );

// app.use( express.static( __dirname + '/public' ) );



app.use( session( {
    name :'M',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    // saveUninitialized: false,
    store: new RedisStore({
        // client: 'mobile',
        // db: redisConfig.db
    }),
    rolling:true,
    
    cookie: { 
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 7*24*60*60*1000
    }
} ) ); 

app.use( cookieParser() );

app.use(csrf());

app.use(function(req, res, next){
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
})

require('./middleware/lib/passport')(passport);

app.use( '/', require('./routes/assets/ui'));

require( './routes/routes' )( app );


app.listen( port );

console.log( 'Server is listening on port ' + port );

// app.use(errorHandler.formatErrors)
// app.use(errorHandler.authErrorHandler)
// app.use(errorHandler.bzlErrorHandler)
// app.use(errorHandler.linkageErrorHandler)
// app.use(errorHandler.errorHandler)


exports = module.exports = app;
