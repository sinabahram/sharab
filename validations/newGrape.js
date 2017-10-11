'use strict';

const ExpressJoi = require('express-joi-validator');
const Joi = require('joi');
const nonEmptyRequiredString = Joi.string().required();
const positiveInteger = Joi.number().integer().positive();
const optionalString = Joi.string().allow('');

const newGrapeSchema = {
  body: {
    name: nonEmptyRequiredString,
    url: nonEmptyRequiredString.uri(),
  }
};
 
module.exports = ExpressJoi(newGrapeSchema);
