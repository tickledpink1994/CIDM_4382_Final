var mongoose = require("mongoose");

module.exports = function() {

    //set up mongoose
    var db = mongoose.connect("mongodb://" + process.env.IP + "/test");
    
    require("../app/models/user.server.model");
    require("../app/models/dungeon.server.model");
    
    return db;
    
};