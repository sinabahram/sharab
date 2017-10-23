'use strict';
module.exports = function(app) {
  var wineStylesController = require('../api/WineStylesController');
  const newWineStyleValidation = require('../validations/newWineStyle');

  app.route('/wineStyles')
    .get(wineStylesController.listAllWineStyles)
    .post(newWineStyleValidation, wineStylesController.createAWineStyle);

  app.route('/wineStyles/new')
    .get(wineStylesController.newWineStyleForm)
    .post(newWineStyleValidation, wineStylesController.createAWineStyle);

  app.route('/wineStyles/:wineStyleId')
    .get(wineStylesController.getAWineStyle)
    .put(wineStylesController.updateAWineStyle)
    .delete(wineStylesController.deleteAWineStyle);

};
