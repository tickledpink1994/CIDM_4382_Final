//User Schema

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    UserName: String,
    Password: String,
    FirstName: String,
    LastName: String,
    BirthDate: Date,
    Email: String
});

var User = mongoose.model('User', UserSchema);