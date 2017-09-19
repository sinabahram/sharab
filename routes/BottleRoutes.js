'use strict';
module.exports = function(app) {
  var bottlesController = require('../api/BottlesController');

  app.route('/bottles')
    .get(bottlesController.listAllBottles)
    .post(bottlesController.createABottle);

  app.route('/bottles/:bottleId')
    .get(bottlesController.getABottle)
    .put(bottlesController.updateABottle)
    .delete(bottlesController.deleteABottle);
};
