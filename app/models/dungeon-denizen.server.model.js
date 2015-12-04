//Dungeon Schema -- Dungeon Denizens

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var denizenSchema = new Schema({
    Name: String,
    CR: Number,
    NumberAppearing: {low: Number, high: Number},
    HitDie: {d: Number, count: Number, plus: Number},
    Classification: String,
    Stats: {
        STR: Number,
        INT: Number,
        WIS: Number,
        DEX: Number,
        CON: Number,
        CHR: Number
    },
    Movement: Number,
    AC: Number,
    NumberAttacks: Number,
    DmgPerAttack: Number,
    Size: {
        type: String,
        enum: ['S', 'M', 'L']
    },
    SpecialAttack: String,
    SpecialDefense: String,
    Environment: String,
    Organization: String,
    Treasure: [{
        item: {
            type: Schema.ObjectID,
            ref: 'Decor'
        }
    }],
    Alignment: {
        type: String,
        enum: ['LG', 'LN', 'LE', 'CG', 'CN', 'CE', 'TN']
    },
    Description: String
});

var Denizen = mongoose.model('Denizen', denizenSchema);