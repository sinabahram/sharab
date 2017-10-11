'use strict';

const ExpressJoi = require('express-joi-validator');
const Joi = require('joi');
const nonEmptyRequiredString = Joi.string().required();
const positiveInteger = Joi.number().integer().positive();
const optionalString = Joi.string().allow('');

const newStatusChangeSchema = {
  body: {
  source: nonEmptyRequiredString.alphanum().min(24).max(24),
    from: nonEmptyRequiredString,
    to: nonEmptyRequiredString,
  }
};
 
module.exports = ExpressJoi(newStatusChangeSchema);
