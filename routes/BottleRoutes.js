'use strict';
module.exports = function(app) {
  var bottlesController = require('../api/BottlesController');
  const newBottleValidation = require('../validations/newBottle');

  app.route('/bottles')
    .get(bottlesController.listAllBottles)
    .post(newBottleValidation, bottlesController.createABottle);

  app.route('/bottles/new')
    .get(bottlesController.newBottleForm)
    .post(newBottleValidation, bottlesController.createABottle);

  app.route('/bottles/:bottleId')
    .get(bottlesController.getABottle)
    .put(bottlesController.updateABottle)
    .delete(bottlesController.deleteABottle);

};
