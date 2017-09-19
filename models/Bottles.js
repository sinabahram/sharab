'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var BottlesSchema = new Schema({
  wine: {
    type: ObjectID,
    required: true
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

  location: {
    type: {storedAt: String, identifier: String},
    required: true
  },

  volumeInLiters: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
    default: 0.75
  },

  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bottles', BottlesSchema);
 