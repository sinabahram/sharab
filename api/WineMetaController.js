'use strict';

var mongoose = require('mongoose'),
  WineMeta = mongoose.model('WineMeta');

exports.listAllWineMeta = function(req, res) {
  WineMeta.find({}, function(err, wineMeta) {
    res.smartRender(req, res, err, wineMeta, 'wineMeta');
  });
};

exports.createAWineMeta = function(req, res) {
  var new_wineMeta = new WineMeta(req.body);
  new_wineMeta.save(function(err, wineMeta) {
    if (err)
      res.send(err);
    res.json(wineMeta);
  });
};

exports.getAWineMeta = function(req, res) {
  Wine.findById(req.params.wineMetaId, function(err, wineMeta) {
    res.smartRender(req, res, err, wineMeta, 'wineMeta');
  });
};

exports.updateAWineMeta = function(req, res) {
  WineMeta.findOneAndUpdate({_id: req.params.wineMetaId}, req.body, {new: true}, function(err, wineMeta) {
    if (err)
      res.send(err);
    res.json(wineMeta);
  });
};

exports.deleteAWineMeta = function(req, res) {
  Wine.remove({
    _id: req.params.wineMetaId
  }, function(err, wineMeta) {
    if (err)
      res.send(err);
    res.json({ message: 'WineMeta successfully deleted' });
  });
};
