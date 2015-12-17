/*var connect = require('connect'); // dumb static server in case i break everything
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);*/

/* WARNING - when npm install ERROR: gyp failed with exit code: 1*/
// Depenencies
var http = require('http');
var express = require('express');
var app = express();
var mongoose = require('mongoose'); // connects to mongodb
var morgan = require('morgan');  // log requests to console
var bodyParser = require('body-parser'); // pull information from html POST
var methodOverride = require('method-override'); // simpulate DELETE and PUT
var Game = require('./public/js/models/game'); // import game model

// connect to mongodb with mongoose
mongoose.connect('mongodb://test:test@ds047792.mongolab.com:47792/asterisk-lounge');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log("connection to mongodb successful");
});


// Build Server
app.use(express.static(__dirname + '/public'));  // set static file location
app.use(morgan('dev'));  // log requests to console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());

// Resgister Routes

// RESTful api
var router = express.Router();

router.use(function(req, res, next) {
  console.log('something is happening');
  next();
});

// test route (GET http://localhost:8080/api/)
router.get('/', function(req, res) {
  res.json({ message: 'hooray!'});
});
app.use('/api', router);

// POST to add game (POST http://localhost:8080/api/game)
router.post('/game', function(req, res) {
  var game = new Game();

  game.name = req.body.name;
  game.owner = req.body.owner;
  game.publisher = req.body.publisher;

  console.log(game);

  game.save(function(err) {
    if(err)
      res.send(err);

    res.json({ message: 'game added to db'});
  });
});

// GET all games (GET http://localhost:8080/api/games)
router.get('/games', function(req, res) {
  Game.find(function(err, games) {
    if(err)
      res.send(err);

    res.json(games);
  });
});

// GET single game TODO
router.get('/games/:name', function(req,res) {
  var g = {};
  g = Game.findOne({ name: req.name}, function(err,game) {
    if(err)
      return console.error(err);
    console.log(game);
  });
  res.json(g);
});

// PUT update game TODO

// DELETE TODO

// all others return index
app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file
});



// listen (start app with node server.js)
app.listen(8080);
console.log("App listening on port 8080");
