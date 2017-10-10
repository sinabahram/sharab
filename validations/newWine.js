'use strict';

const ExpressJoi = require('express-joi-validator');
const Joi = require('joi');
const nonEmptyRequiredString = Joi.string().required();
const positiveInteger = Joi.number().integer().positive();
const optionalString = Joi.string().allow('');

const newWineSchema = {
  body: {
    name: nonEmptyRequiredString,
    maker: nonEmptyRequiredString,
    vintage: positiveInteger.required(),

    country: optionalString,
    region: optionalString,
    grapes: optionalString,
    abv: Joi.number().min(0.0).max(1.0).allow(''),
    urls: optionalString,
    description: optionalString,
    notes: optionalString,
    drinkByMin: positiveInteger.allow(''),
    drinkByMax: positiveInteger.allow(''),
  }
};

 
module.exports = ExpressJoi(newWineSchema);
