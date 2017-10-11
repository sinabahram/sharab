'use strict';

const ExpressJoi = require('express-joi-validator');
const Joi = require('joi');
const nonEmptyRequiredString = Joi.string().required();
const positiveInteger = Joi.number().integer().positive();
const optionalString = Joi.string().allow('');

const newTastingSchema = {
  body: {
    bottle: nonEmptyRequiredString.alphanum().min(24).max(24),
    drankOn: Joi.date(),
    score: positiveInteger.min(1).max(100),
    notes: nonEmptyRequiredString,
  }
};
 
module.exports = ExpressJoi(newTastingSchema);
