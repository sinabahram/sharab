'use strict';
module.exports = function(app) {
  var grapesController = require('../api/GrapesController');
  const newGrapeValidation = require('../validations/newGrape');

  app.route('/grapes')
    .get(grapesController.listAllGrapes)
    .post(newGrapeValidation, grapesController.createAGrape);

  app.route('/grapes/new')
    .get(grapesController.newGrapeForm)
    .post(newGrapeValidation, grapesController.createAGrape);

  app.route('/grapes/:grapeId')
    .get(grapesController.getAGrape)
    .put(grapesController.updateAGrape)
    .delete(grapesController.deleteAGrape);

};
