'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var TastingSchema = new Schema({
  bottle: {
    type: ObjectID,
    ref: 'Bottle',
    required: true
  },

  drankOn: {
    type: Date,
    default: Date.now
  },

  notes: String,

  score: {
    type: Number,
    min: 1.0,
    max: 10.0
  },

}, {timestamps: true});

module.exports = mongoose.model('Tasting', TastingSchema);
 