'use strict';
module.exports = function(app) {
  var winesController = require('../api/WinesController');

  app.route('/wines')
    .get(winesController.listAllWines)
    .post(winesController.createAWine);

  app.route('/wines/new')
    .get(winesController.newWineForm)
    .post(winesController.createAWine);

  app.route('/wines/:wineId')
    .get(winesController.getAWine)
    .put(winesController.updateAWine)
    .delete(winesController.deleteAWine);

};
