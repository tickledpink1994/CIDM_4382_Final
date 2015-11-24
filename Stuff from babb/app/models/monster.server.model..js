'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
var MonsterSchema = new Schema({
   mID: Number, 
   mName: String,
   mHD: Number,
   mAppearing: {
       min: String,
       max: String
   },
   mSize: {type: String(2), lowercase: true},
   mFrequency: String(2),
   mEnvirnment: String,
   mCR: Number
});

var Monster = mongoose.model('Monster', MonsterSchema);