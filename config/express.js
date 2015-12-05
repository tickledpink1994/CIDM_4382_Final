//import the express library
var express = require('express');
//import the body parser
var bodyParser = require('body-parser');
//import the method override module
var methodOverride = require('method-override');
//import the passport module
var passport = require('passport');
//import the Express-Session module
var session = require('passport');


module.exports = function() {
    
    //call the module.exports method of the express library
    var app = express();
    
    //set up the body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    //include method override
    app.use(methodOverride());
    
    //set up the session secret variable
    var sessionSecret = 'developmentSessionSecret';
    
    //set up the express session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: sessionSecret
    }));
    
    //configure express to use ejs
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    //configure passport
    app.use(passport.initialize());
    app.use(passport.session());
    
    //set up the routing for the app
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/user.server.routes.js')(app);
    require('../app/routes/dungeon.server.routes.js')(app);
    
    //Where to retrieve images and other static content from
    app.use(express.static('./client'));
    
    //return the app to the server.js file
    return app;
};