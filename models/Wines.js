'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var WineSchema = new Schema({
  wineMeta: {
    type: ObjectID,
    ref: 'WineMeta',
    required: true
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
    min: 8,
    max: 32
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

  Created_date: {
    type: Date,
    default: Date.now
  }
  });

module.exports = mongoose.model('Wines', WineSchema);
 