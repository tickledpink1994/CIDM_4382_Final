//Dungeon Schema

'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dungeonSchema = new Schema({
    Name: String,
    CreatedBy: String,
    CreatedOn: {
        type: Date,
        default: Date.now()
    },
    Description: String,
    Levels: [{
        GMID: Number,
        Description: String,
        Rooms: [{
            GMID: Number,
            Description: String,
            Shape: {
                Description: String,
                WallCount: Number
            },
            Location: {x:Number, y:Number},
            Makeup: {
                Walls: [{
                    CID: Number,
                    Material: String,
                    Direction: Number,
                    Moveable: Boolean,
                    Terrain: [String],
                    Location: {x: Number, y:Number},
                    Size: {h: Number, w:Number},
                    Visible: Boolean,
                    Doors: [{
                        CID: Number,
                        Material: String,
                        Location: {x: Number, y:Number},
                        Size: {h: Number, w:Number},
                        Status: [String],
                        GoesToRoom: Number
                    }],
                    Windows: [{
                        CID: Number,
                        Material: String,
                        Location: {x: Number, y:Number},
                        Size: {h: Number, w:Number},
                        Status: [String],
                        GoesToRoom: Number
                    }]
                }],
                Ceiling: {
                    Materiel: String,
                    Terrain: [String],
                    Moveable: Boolean,
                    Visible: Boolean,
                    Doors: [{
                        CID: Number,
                        Material: String,
                        Location: {x: Number, y:Number},
                        Size: {h: Number, w:Number},
                        Status: [String],
                        GoesToRoom: Number
                    }],
                    Windows: [{
                        CID: Number,
                        Material: String,
                        Location: {x: Number, y:Number},
                        Size: {h: Number, w:Number},
                        Status: [String],
                        GoesToRoom: Number
                    }]
                },
                Floor: {
                    Materiel: String,
                    Terrain: [String],
                    Moveable: Boolean,
                    Visible: Boolean,
                    Doors: [{
                        CID: Number,
                        Material: String,
                        Location: {x: Number, y:Number},
                        Size: {h: Number, w:Number},
                        Status: [String],
                        GoesToRoom: Number
                    }],
                    Windows: [{
                        CID: Number,
                        Material: String,
                        Location: {x: Number, y:Number},
                        Size: {h: Number, w:Number},
                        Status: [String],
                        GoesToRoom: Number
                    }]
            }
        }]
    }]
});

var Dungeon = mongoose.model('Dungeon', dungeonSchema);