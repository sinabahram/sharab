'use strict';

const mongoose = require('mongoose'),
  Bottle = mongoose.model('Bottle'),
  Wine = mongoose.model('Wine');

exports.listAllBottles = function(req, res) {
  Bottle.find({}, function(err, bottles) {
    res.smartRender(req, res, err, bottles, 'bottles');
  });
};

exports.createABottle = function(req, res) {
  var newBottle = new Bottle(req.body);

  newBottle.save(function(err, bottle) {
    if (err)
      res.send(err);

    res.redirect('/bottles');
  }); // newBottle.save
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

    res.redirect('/bottles/'+bottleId);
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
Wine.find({}, function(err, wines) {res.render('bottles/new', {wines: wines});});
};

