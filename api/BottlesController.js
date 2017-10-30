'use strict';

const mongoose = require('mongoose'),
  Bottle = mongoose.model('Bottle'),
  StatusChange = mongoose.model('StatusChange'),
  Wine = mongoose.model('Wine');

exports.listAllBottles = function(req, res) {
  Bottle.find().populate('wine').exec(function(err, bottles) {
    return res.smartRender(req, res, err, {bottles: bottles}, 'bottles');
  });
};

exports.createABottle = function(req, res) {
  var newBottle = new Bottle(req.body);

  newBottle.save(function(err, bottle) {
    if (err)
      return res.send(err);

  const newStatusChange = new StatusChange({source: bottle.id, name: 'Bottle', from: 'undefined', to: 'created'});
  newStatusChange.save();

    res.redirect('/bottles');
  }); // newBottle.save
};

exports.getABottle = function(req, res) {
  Bottle.findById(req.params.bottleId, function(err, bottle) {
    return res.smartRender(req, res, err, bottle, 'bottles/single');
  });
};

exports.updateABottle = function(req, res) {
  Bottle.findOneAndUpdate({_id: req.params.bottleId}, req.body, {new: true}, function(err, bottle) {
    if (err)
      return res.send(err);

    res.redirect('/bottles/'+bottleId);
  });
};

exports.deleteABottle = function(req, res) {
  Bottle.remove({
    _id: req.params.bottleId
  }, function(err, bottle) {
    if (err)
      return res.send(err);
    return res.json({ message: 'Bottle successfully deleted' });
  });
};

exports.newBottleForm = function(req, res) {
  Wine.find({}, function(err, wines) {
    if(err)
      return res.send(err);

    return res.render('bottles/new', {wines: wines});
  });
};

