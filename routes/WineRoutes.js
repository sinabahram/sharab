'use strict';
module.exports = function(app) {
  var winesController = require('../api/WinesController');
  const newWineValidation = require('../validations/newWine');

  app.route('/wines')
    .get(winesController.listAllWines)
    .post(newWineValidation, winesController.createAWine);

  app.route('/wines/new')
    .get(winesController.newWineForm)
    .post(newWineValidation, winesController.createAWine);

  app.route('/wines/:wineId')
    .get(winesController.getAWine)
    .put(winesController.updateAWine)
    .delete(winesController.deleteAWine);

};
