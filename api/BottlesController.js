'use strict';

var mongoose = require('mongoose'),
  Bottle = mongoose.model('Bottle');

exports.listAllBottles = function(req, res) {
  Bottle.find({}, function(err, bottles) {
    res.smartRender(req, res, err, bottles, 'bottles');
  });
};

exports.createABottle = function(req, res) {
  var new_bottle = new Bottle(req.body);
  new_bottle.save(function(err, bottle) {
    if (err)
      res.send(err);

    res.redirect('/bottles');
  });
};

exports.getABottle = function(req, res) {
  Bottle.findById(req.params.bottleId, function(err, bottle) {
    res.smartRender(req, res, err, bottle, 'bottles');
  });
};

exports.updateABottle = function(req, res) {
  Bottle.findOneAndUpdate({_id: req.params.bottleId}, req.body, {new: true}, function(err, bottle) {
    if (err)
      res.send(err);
    res.json(bottle);
  });
};

exports.deleteABottle = function(req, res) {
  Bottle.remove({
    _id: req.params.bottleId
  }, function(err, bottle) {
    if (err)
      res.send(err);
    res.json({ message: 'Bottle successfully deleted' });
  });
};

exports.newBottleForm = function(req, res) {
  res.render('bottles/new');
};

