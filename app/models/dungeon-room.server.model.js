//Dungeon Schema -- Dungeon Rooms

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    GMID: Number,
    Name: String,
    Description: String,
    Shape: {
        shapeDesc: {
            type: String,
            enum: ['HEX', 'OCT', 'SQR', 'REC', 'OTHER']
        },
        wallCount: Number,
        genDesc: String
    },
    Walls: [{
        wall: {
            type: Schema.ObjectId,
            ref: 'Walls'
        },
        Direction: {
            type: String,
            enum: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
        }
    }],
    Ceiling: {
        type: Schema.ObjectId,
        ref:'Walls'
    },
    Floor: {
        type: Schema.ObjectId,
        ref: 'Walls'
    },
    Decor: [{
        item: {
            type: Schema.ObjectID,
            ref: 'Decor'
        },
        Location: {
            
        }
    }]
});