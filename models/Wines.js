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
    type: [String],
    default: undefined
  },

  abv: {
    type: Number,
    min: 0.0,
    max: 1.0
  },

  statuses: {
    type: [{
      status: {
        type: String,
        enum: ['aquired', 'to be stored', 'stored', 'drunk', 'other']
      },
      date: Date
    }],

    required: true,
    default: [{name: 'aquired', date: Date.now}]
  },

  description: String,
  comments: String,
  drinkBy: {first: Number, last: Number},

  reviews: {
    type: [{source: String, rating: Number, contents: String}],
    default: undefined
  },

  tastings: {
    type: [{drankOn: {type: Date, default: Date.now}, notes: String, score: {type: Number, min: 1, max: 10}}],
    default: undefined
  },

  created: {
    type: Date,
    default: Date.now,
    required:true
  },

  lastUpdated: {
    type: Date,
    default: Date.now,
    required:true
  }
  });

module.exports = mongoose.model('Wines', WineSchema);
 