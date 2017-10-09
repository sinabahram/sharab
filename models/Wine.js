'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var WineSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the wine'
  },

  maker: {
    type: String,
    required: 'Who makes this wine'
  },

  country: {
    type: String,
    required: 'Enter the country for this wine'
  },

  region: {
    type: String,
    required: 'Enter the region for this wine'
  },

  grapes: {
    type: [{name: String, percentage: Number}],
    required: true,
  },

  vintage: {
    type: Number,
    required: 'Enter the vintage of the wine (0 for NV)'
  },

  urls: {
    type: [{name: String, url: String}],
    default: undefined
  },

  abv: {
    type: Number,
    min: 0.0,
    max: 1.0
  },

  description: String,
  comments: String,
  drinkBy: {first: Number, last: Number},

  ratings: {
    type: [{source: String, rating: Number, notes: String}],
    default: undefined
  },

  tastings: {
    type: [{drankOn: {type: Date, default: Date.now}, notes: String, score: {type: Number, min: 1, max: 10}}],
    default: undefined
  },
  }, {timestamps: true});

module.exports = mongoose.model('Wine', WineSchema);
 