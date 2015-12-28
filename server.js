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
var tribes = require('./public/js/models/tribes'); //import 5tribes score model

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

// GET single game based on id TODO
router.get('/games/:id', function(req,res) {
  var g = {};
  g = Game.findOne({ _id: req.id}, function(err,game) {
    if(err)
      return console.error(err);
    console.log(game);
  });
  res.json(g);
});

// PUT update game TODO

// DELETE a single game based on _id TODO
router.delete('/games/:id', function(req, res) {
  Game.remove({
    _id: req.params.id
  }, function(err, game) {
      if(err)
        res.send(err);

      res.json({ message:'Successfully Deleted'});

  });
});

/** 5 Tribes api
 *  post - post new 5 tribes score
 *  get - get all 5 tribes scores
 *  get:id - get a spacific 5 tribes score by id
 *  put - update a 5 tribes score
 *  delete - delete a 5 tribes score
 */

 router.get('/tribes', function(req, res) {
   tribes.find(function(err, scores) {
     if(err)
        res.send(err);

     res.json(scores);
   });
 });

 router.get('/tribes/:id', function(req, res) {
   // TODO
 });

 router.post('/tribes', function(req, res) {
   var score = new tribes();

   score.date = req.body.date;
   score.gamenumber = req.body.gamenumber;
   score.playername = req.body.playername;
   score.playercount = req.body.playercount;
   score.gold = req.body.gold;
   score.yellow = req.body.yellow;
   score.white = req.body.white;
   score.djinn = req.body.djinn;
   score.camel = req.body.camel;
   score.palm = req.body.palm;
   score.palace = req.body.palace;
   score.resource = req.body.resource;
   score.total = req.body.total;

   tribes.save(function(err) {
     if(err)
        res.send(err);

     res.json({ message: 'score added to 5tribes db'});
   });
 });

 router.put('/tribes/:id', function(req, res) {
   // TODO
 });

 router.delete('/tribes/:id', function(req, res) {
   // TODO
 });
// all others return index
app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file
});



// listen (start app with node server.js)
app.listen(8080);
console.log("App listening on port 8080");
