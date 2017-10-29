'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var BottleSchema = new Schema({
  wine: {
    type: ObjectID,
    ref: 'Wine',
    required: true
  },

  location: {
    type: String,
    required: true
  },

  volumeInLiters: {
    type: Number,
    min: 0.05,
    max: 5.0,
    required: true,
    default: 0.75
  },

  price: Number,

}, {timestamps: true});

module.exports = mongoose.model('Bottle', BottleSchema);
 