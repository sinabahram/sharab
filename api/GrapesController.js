'use strict';

var mongoose = require('mongoose'),
  Grape = mongoose.model('Grape');

exports.listAllGrapes = function(req, res) {
  Grape.find({}, function(err, grapes) {
    res.smartRender(req, res, err, grapes, 'grapes');
  });
};

exports.createAGrape = function(req, res) {
  var newGrape = new Grape(req.body);
  newGrape.save(function(err, grape) {
    if (err)
      res.send(err);

    res.redirect('/grapes');
  });
};

exports.getAGrape = function(req, res) {
  Grape.findById(req.params.grapeId, function(err, grape) {
    res.smartRender(req, res, err, grape, 'grape');
  });
};

exports.updateAGrape = function(req, res) {
  Grape.findOneAndUpdate({_id: req.params.grapeId}, req.body, {new: true}, function(err, grape) {
    if (err)
      res.send(err);

    res.redirect('/grapes/'+grapeId);
  });
};

exports.deleteAGrape = function(req, res) {
  Grape.remove({
    _id: req.params.grapeId
  }, function(err, grape) {
    if (err)
      res.send(err);

    res.json({ message: 'Grape successfully deleted' });
  });
};

exports.newGrapeForm = function(req, res) {
  res.render('grapes/new');
};

