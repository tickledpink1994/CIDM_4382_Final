//Dungeon Crawler

'use strict';

//import the express library
var express = require('./config/express');
var mongoose = require("./config/mongoose");

//call the modules.exports method of the express configuration file
//this is where all the middleware is stored
var db = mongoose();
var app = express(); 

//now that all the middleware is set up, start listening
app.listen(process.env.PORT, process.env.IP);
//print to the console that the app is running
console.log("Dungeon Crawler is running.");

//export the app
module.exports = app;