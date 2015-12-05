//User Schema

'use strict';

var mongoose = require("mongoose");
var crypto = require('crypto');
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
                return Password && Password.length > 6;
            },
            'Password must be more than 6 characters.'
        ]
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    FirstName: String,
    LastName: String,
    Email: {
        type: String,
        unique: true,
        index: true,
        required: true,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    Role: {
        type: String,
        enum: ['admin', 'user']
    }
});

UserSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    
    next();
});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');
    
    _this.findOne({
        username: possibleUsername
    }, function(err, user) {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('User', UserSchema);