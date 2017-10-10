'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var RatingSourceSchema = new Schema({
  name: String,
  url: String,
  minScore: {type: Number, default: 0.0},
  maxScore: { type: Number, default: 100.0},
}, {timestamps: true});

module.exports = mongoose.model('RatingSource', RatingSourceSchema);
 