'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var RatingSchema = new Schema({
  wine: {
    type: ObjectID,
    ref: 'Wine',
    required: true
  },

  source: {
    type: ObjectID,
    ref: 'RatingSource',
    required: true
  },

  drankOn: {
    type: Date,
    default: Date.now
  },

  url: String,
  score: Number,
  notes: String,

}, {timestamps: true});

module.exports = mongoose.model('Rating', RatingSchema);
 