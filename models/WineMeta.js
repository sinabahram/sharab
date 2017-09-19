'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineMetaSchema = new Schema({
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

  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WineMeta', WineMetaSchema);
 