//Dungeon Schema -- Dungeon Room Wall

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wallSchema = new Schema({
   Material: String,
   Moveable: Boolean,
   Visible: Boolean,
   Terrain: [String],
   Location: {
       x: Number,
       y: Number,
       z: Number
   },
   Size: {
       h: Number,
       w: Number, 
       l: Number
   },
   Exits: [{
       door: {
           type: Schema.ObjectId,
           ref: 'Door'
       }
   }]
});