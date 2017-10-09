'use strict';

var mongoose = require('mongoose'),
  Wine = mongoose.model('Wine');

exports.listAllWines = function(req, res) {
  Wine.find({}, function(err, wines) {
    res.smartRender(req, res, err, wines, 'wines');
  });
};

exports.createAWine = function(req, res) {
  var new_wine = new Wine(req.body);
  new_wine.save(function(err, wine) {
    if (err)
      res.send(err);
    res.json(wine);
  });
};

exports.getAWine = function(req, res) {
  Wine.findById(req.params.wineId, function(err, wine) {
    res.smartRender(req, res, err, wine, 'wines');
  });
};

exports.updateAWine = function(req, res) {
  Wine.findOneAndUpdate({_id: req.params.wineId}, req.body, {new: true}, function(err, wine) {
    if (err)
      res.send(err);
    res.json(wine);
  });
};

exports.deleteAWine = function(req, res) {
  Wine.remove({
    _id: req.params.wineId
  }, function(err, wine) {
    if (err)
      res.send(err);
    res.json({ message: 'Wine successfully deleted' });
  });
};
