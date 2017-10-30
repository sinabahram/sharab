'use strict';

var mongoose = require('mongoose'),
  StatusChange = mongoose.model('StatusChange'),
  Grape = mongoose.model('Grape');

exports.listAllGrapes = function(req, res) {
  Grape.find({}, function(err, grapes) {
    return res.smartRender(req, res, err, {grapes: grapes}, 'grapes');
  });
};

exports.createAGrape = function(req, res) {
  var newGrape = new Grape(req.body);
  newGrape.save(function(err, grape) {
    if (err)
      return res.send(err);

  const newStatusChange = new StatusChange({source: grape.id, name: 'Grape', from: 'undefined', to: 'created'});
  newStatusChange.save();

    res.redirect('/grapes');
  });
};

exports.getAGrape = function(req, res) {
  Grape.findById(req.params.grapeId, function(err, grape) {
    return res.smartRender(req, res, err, grape, 'grapes/single');
  });
};

exports.updateAGrape = function(req, res) {
  Grape.findOneAndUpdate({_id: req.params.grapeId}, req.body, {new: true}, function(err, grape) {
    if (err)
      return res.send(err);

    res.redirect('/grapes/'+grapeId);
  });
};

exports.deleteAGrape = function(req, res) {
  Grape.remove({
    _id: req.params.grapeId
  }, function(err, grape) {
    if (err)
      return res.send(err);

    return res.json({ message: 'Grape successfully deleted' });
  });
};

exports.newGrapeForm = function(req, res) {
  return res.render('grapes/new');
};

