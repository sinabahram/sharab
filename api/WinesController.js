'use strict';

const mongoose = require('mongoose'),
  Wine = mongoose.model('Wine'),
  Grape = mongoose.model('Grape'),
  WineStyle = mongoose.model('WineStyle'),
  StatusChange = mongoose.model('StatusChange'),
  Utils = require('../utils.js');

exports.listAllWines = function(req, res) {
  Wine.find({}, function(err, wines) {
    if(err)
      return res.send(err);

    for(var i=0, len=wines.length; i<len; i++) {
      wines[i].tagName = Utils.decToTag(wines[i].tag);
    }

    return res.smartRender(req, res, err, {wines: wines}, 'wines');
  });
};

exports.createAWine = function(req, res) {
//  console.log("before -> req.body = "+JSON.stringify(req.body));

Wine.findOne({}).sort('-tag').exec(function (err, wineWithMaxTag) {
    if (err)
      return res.send(err);

//console.log("wine with max tag = "+wineWithMaxTag);
    var maxTag = -1;
    if(wineWithMaxTag === null) {
      maxTag = 0;
    }
else {
      maxTag = wineWithMaxTag.tag;
    }

  var grapes = [];
  if('grapes' in req.body) {
    if(req.body.grapes.length === 0)
      delete req.body.grapes;

    else {
      var grapesArray = req.body.grapes.split(',');
      for(var i=0; i<grapesArray.length; i+=2) {
        grapes.push({grape: grapesArray[i], percentage: grapesArray[i+1]});
      }
    }
  }
  req.body.grapes = grapes;

  if('urls' in req.body && req.body.urls.length === 0)
    delete req.body.urls;

  if('wineStyle' in req.body && req.body.wineStyle.length === 0)
    delete req.body.wineStyle;

//  console.log("after -> req.body = "+JSON.stringify(req.body));

  var newWine = new Wine(req.body);
    newWine.tag = maxTag+1;

  newWine.save(function(err, wine) {
    if (err)
      return res.send(err);

/*
console.log("err = "+err);
console.log("wine = "+wine);
  console.log("wine in newWine.save() = "+JSON.stringify(wine));
*/

  const newStatusChange = new StatusChange({source: wine.id, name: 'Wine', from: 'undefined', to: 'created'});
  newStatusChange.save();

    res.redirect('/wines');
  }); // newWine.save()
  }); // Wine.fineOne()
};

exports.getAWine = function(req, res) {
  Wine.findOne({tag: req.params.tag}).populate('wineStyle').populate('grapes.grape').exec(function(err, wine) {
    if (err)
      return res.send(err);

    wine.tagName = Utils.decToTag(wine.tag);

    return res.smartRender(req, res, err, wine, 'wines/single');
  });
};

exports.updateAWine = function(req, res) {
  Wine.findOneAndUpdate({_id: req.params.wineId}, req.body, {new: true}, function(err, wine) {
    if (err)
      return res.send(err);

    return res.json(wine);
  });
};

exports.deleteAWine = function(req, res) {
  Wine.remove({
    _id: req.params.wineId
  }, function(err, wine) {
    if (err)
      return res.send(err);

    return res.json({ message: 'Wine successfully deleted' });
  });
};

exports.newWineForm = function(req, res) {
  WineStyle.find({}, function(err, wineStyles) {
    if(err)
      return res.send(err);

  Grape.find({}, function(err, grapes) {
    if(err)
      return res.send(err);

  return res.render('wines/new', {grapes: grapes, wineStyles: wineStyles});
}); // Grape.find()
}); // WineStyle.find()

};
