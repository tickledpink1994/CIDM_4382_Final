//User Schema

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    UserName: {
        type: String,
        unique: true,
        trim: true
    },
    Password: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function(Password) {
                return Password.length >= 6;
            },
            'Password must be more than 6 characters.'
        ]
    },
    FirstName: String,
    LastName: String,
    Email: {
        type: String,
        unique: true,
        index: true,
        required: true,
        match: /.+\@.+\..+/
    },
    Role: {
        type: String,
        enum: ['admin', 'user']
    }
});

var User = mongoose.model('User', UserSchema);