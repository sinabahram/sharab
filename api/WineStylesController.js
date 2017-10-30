'use strict';

const mongoose = require('mongoose'),
  StatusChange = mongoose.model('StatusChange'),
  WineStyle = mongoose.model('WineStyle');

exports.listAllWineStyles = function(req, res) {
  WineStyle.find({}, function(err, wineStyles) {
    return res.smartRender(req, res, err, {wineStyles: wineStyles}, 'wineStyles');
  });
};

exports.createAWineStyle = function(req, res) {
  var newWineStyle = new WineStyle(req.body);
  newWineStyle.save(function(err, wineStyle) {
    if (err)
      return res.send(err);

  const newStatusChange = new StatusChange({source: wineStyle.id, modelName: 'WineStyle', from: 'undefined', to: 'created'});
  newStatusChange.save();

    res.redirect('/wineStyles');
  });
};

exports.getAWineStyle = function(req, res) {
  WineStyle.findById(req.params.wineStyleId, function(err, wineStyle) {
    return res.smartRender(req, res, err, wineStyle, 'wineStyles/single');
  });
};

exports.updateAWineStyle = function(req, res) {
  WineStyle.findOneAndUpdate({_id: req.params.wineStyleId}, req.body, {new: true}, function(err, wineStyle) {
    if (err)
      return res.send(err);

    res.redirect('/wineStyles/'+wineStyleId);
  });
};

exports.deleteAWineStyle = function(req, res) {
  WineStyle.remove({
    _id: req.params.wineStyleId
  }, function(err, wineStyle) {
    if (err)
      return res.send(err);

    return res.json({ message: 'WineStyle successfully deleted' });
  });
};

exports.newWineStyleForm = function(req, res) {
  return res.render('wineStyles/new');
};

