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

  vintage: {
    type: Number,
    required: 'Enter the vintage of the wine (0 for NV)'
  },

  wineType: {
    type: String,
    enum: ['red', 'white', 'rose'],
    default: 'red'
  },

  hasBubbles: {
    type: Boolean,
    default: false,
    required: true
  },

  tag: {
    type: Number,
    min: 1.0,
    required: true
  },



  country: String,
  region: String,

  grapes: {
    type: [{
      grape: {
        type: ObjectID,
        ref: 'Grape',
      },
      percentage: {
        type: Number,
        default: 100.0
      }
    }],
  },

  urls: {
    type: [{name: String, url: String}],
    default: undefined
  },

  abv: {
    type: Number,
    min: 0.0,
    max: 1.0,
  },

  description: String,
  notes: String,
  drinkBy: {first: Number, last: Number},

  }, {timestamps: true});

module.exports = mongoose.model('Wine', WineSchema);
 