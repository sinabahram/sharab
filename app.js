var process = require('process');
var express = require('express');
var handlebars = require('express-handlebars');
var handlebarsSections = require('express-handlebars-sections');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var models = require('./models');
var routes = require('./routes');
var app = express();
 
var hbs = handlebars.create({defaultLayout: 'main', partialsDir: ['views/partials/']});
handlebarsSections(hbs);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_3nn23cgm:2e2q0q59dtqqbnasohqtqj1ml1@ds141514.mlab.com:41514/heroku_3nn23cgm'); 

function wantsJson() {
  return this.accepts('html', 'json') === 'json';
}

function smartRender(req, res, err, data, view) {
if (err)
  return res.send(err);

  if(req.wantsJson())
    return res.json(data);
  else
    return res.render(view, data);
}

app.use(function (req, res, next) {
  req.wantsJson = wantsJson;
  res.smartRender= smartRender;
  next();
});

routes.IndexRoutes(app);
routes.WineRoutes(app);
routes.BottleRoutes(app);
routes.GrapeRoutes(app);
routes.WineStyleRoutes(app);

app.listen(process.env.PORT || 3000)
