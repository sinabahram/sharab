'use strict';

const mongoose = require('mongoose'),
  Wine = mongoose.model('Wine'),
  StatusChange = mongoose.model('StatusChange');

exports.listAllWines = function(req, res) {
  Wine.find({}, function(err, wines) {
    res.smartRender(req, res, err, wines, 'wines');
  });
};

exports.createAWine = function(req, res) {
//  console.log("req.body = "+JSON.stringify(req.body));

Wine.findOne({}).sort('-tag').exec(function (err, wineWithMaxTag) {
    if (err)
      return res.send(err);

console.log("wine with max tag = "+wineWithMaxTag);
    var maxTag = -1;
    if(wineWithMaxTag === null) {
      maxTag = 0;
    }
else {
      maxTag = wineWithMaxTag.tag;
    }

  var newWine = new Wine(req.body);
    newWine.tag = maxTag+1;

console.log("maxTag = "+maxTag);
  console.log("newWine = "+JSON.stringify(newWine));

  newWine.save(function(err, wine) {
    if (err)
      return res.send(err);

/*
console.log("err = "+err);
console.log("wine = "+wine);
  console.log("wine in newWine.save() = "+JSON.stringify(wine));
*/

  const newStatusChange = new StatusChange({source: wine.id, from: 'undefined', to: 'created'});
  newStatusChange.save();

    res.redirect('/wines');
  }); // newWine.save()
  }); // Wine.fineOne()
};

exports.getAWine = function(req, res) {
  Wine.findById(req.params.wineId, function(err, wine) {
    res.smartRender(req, res, err, wine, 'wines');
  });
};

exports.updateAWine = function(req, res) {
  Wine.findOneAndUpdate({_id: req.params.wineId}, req.body, {new: true}, function(err, wine) {
    if (err)
      return res.send(err);
    res.json(wine);
  });
};

exports.deleteAWine = function(req, res) {
  Wine.remove({
    _id: req.params.wineId
  }, function(err, wine) {
    if (err)
      return res.send(err);
    res.json({ message: 'Wine successfully deleted' });
  });
};

exports.newWineForm = function(req, res) {
  res.render('wines/new');
};
