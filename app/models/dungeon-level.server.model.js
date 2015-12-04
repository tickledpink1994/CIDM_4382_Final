//Dungeon Schema -- Dungeon Level

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var levelSchema = new Schema({
    GMID: Number,
    Name: String,
    Description: String,
    Rooms: [{
        RoomRef: {
            type: Schema.ObjectId,
            ref: 'Room'
        }
    }],
    Tables: [{
        TableRef: {
            type: Schema.ObjectID,
            ref: 'Tables'
        }
    }],
    Notes: String
});

levelSchema.virtual('roomCount').get(function() {
    return this.Rooms.length;
});

levelSchema.set('toJSON', { getters: true, virtuals: true});

var Level = mongoose.model('Level', levelSchema);