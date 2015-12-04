//Dungeon Schema

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dungeonSchema = new Schema({
    Name: {
        type: String,
        default: '',
        trim: true,
        required: 'Dungeon must have a name.'
    },
    CreatedBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    CreatedOn: {
        type: Date,
        default: Date.now
    },
    Description: {
        type: String,
        default: '',
        trim: true
    },
    Levels: [{
        level: {
            type: Schema.ObjectId,
            ref: 'Levels'
        }
    }],
    Tables: [{
        table: {
            type: Schema.ObjectId,
            ref: 'Tables'
        }
    }],
    Notes: String
});

dungeonSchema.virtual('levelCount').get(function() {
    return this.Levels.length;
});

dungeonSchema.set('toJSON', { getters: true, virtuals: true });

var Dungeon = mongoose.model('Dungeon', dungeonSchema);