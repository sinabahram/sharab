'use strict';
module.exports = function(app) {
  var wineMetaController = require('../api/WineMetaController');

  app.route('/wineMeta')
    .get(wineMetaController.listAllWineMeta)
    .post(wineMetaController.createAWineMeta);

  app.route('/wineMeta/:wineMetaId')
    .get(wineMetaController.getAWineMeta)
    .put(wineMetaController.updateAWineMeta)
    .delete(wineMetaController.deleteAWineMeta);
};
