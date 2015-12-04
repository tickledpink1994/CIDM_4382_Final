//import the express library
var express = require('express');

module.exports = function() {
    
    //call the module.exports method of the express library
    var app = express();
    
    //configure express to use ejs
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    //set up the routing for the app
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/user.server.routes.js')(app);
    require('../app/routes/dungeon.server.routes.js')(app);
    
    //Where to retrieve images and other static content from
    app.use(express.static('./client'));
    
    //return the app to the server.js file
    return app;
};