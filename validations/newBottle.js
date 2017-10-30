'use strict';

const ExpressJoi = require('express-joi-validator');
const Joi = require('joi');
const nonEmptyRequiredString = Joi.string().required();
const positiveInteger = Joi.number().integer().positive();
const optionalString = Joi.string().allow('');

const newBottleSchema = {
  body: {
    wine: nonEmptyRequiredString.alphanum().min(24).max(24),
    volumeInLiters: Joi.number().min(0.05).max(5).required(),
    price: Joi.number().required(),
    location: optionalString,
  }
};
 
module.exports = ExpressJoi(newBottleSchema);
