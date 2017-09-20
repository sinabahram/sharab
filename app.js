var process = require('process');
var express = require('express');
var handlebars = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var models = require('./models');
var routes = require('./routes');

var app = express();
 
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_3nn23cgm:2e2q0q59dtqqbnasohqtqj1ml1@ds141514.mlab.com:41514/heroku_3nn23cgm'); 

function wantsJson() {
  return this.accepts('html', 'json') === 'json';
}

function smartRender(res, req, err, data, view) {
if (err)
  res.send(err);

  if(req.wantsJson())
    res.json(data);
  else
    res.render(view, {data: data});
}

app.use(function (req, res, next) {
  req.wantsJson = wantsJson;
  req.smartRender= smartRender;
  next();
});




routes.IndexRoutes(app);
routes.WineMetaRoutes(app);
routes.WineRoutes(app);
routes.BottleRoutes(app);

app.listen(process.env.PORT || 3000)
