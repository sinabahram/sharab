'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var GrapeSchema = new Schema({
  name: String,
  url: String
}, {timestamps: true});

module.exports = mongoose.model('Grape', GrapeSchema);
 