'use strict';

const ExpressJoi = require('express-joi-validator');
const Joi = require('joi');
const nonEmptyRequiredString = Joi.string().required();
const positiveInteger = Joi.number().integer().positive();
const optionalString = Joi.string().allow('');

const newRatingSourceSchema = {
  body: {

    name: nonEmptyRequiredString,
    url: nonEmptyRequiredString.uri(),
    scoreMin: positiveInteger.min(1).max(100),
    scoreMax: positiveInteger.min(1).max(100),
  }
};

 
module.exports = ExpressJoi(newRatingSourceSchema);
