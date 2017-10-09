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

  statuses: {
    type: [{
      status: {
        type: String,
        enum: ['aquired', 'to be stored', 'stored', 'drunk']
      },
      date: Date
    }],

    required: true,
    default: [{name: 'aquired', date: Date.now}]
  },

  location: {
    type: String,
    required: true
  },

  tag: {
    type: String,
    required: true
  },

  volumeInLiters: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
    default: 0.75
  },

}, {timestamps: true});

module.exports = mongoose.model('Bottle', BottleSchema);
 