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
var Tribes = require('./public/js/models/tribes'); //import 5tribes score model
var Wonders = require('./public/js/models/wonders'); //import 7wonders score model
var Empires = require('./public/js/models/empires'); //import empires: age of discovery score model

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
   Tribes.find(function(err, scores) {
     if(err)
        res.send(err);

     res.json(scores);
   });
 });

 router.get('/tribes/:id', function(req, res) {
   // TODO
 });

 router.post('/tribes', function(req, res) {
   var score = new Tribes();

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

   score.save(function(err) {
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

 /** 7 wonders api
  *
  */

// get all 7wonders scores
router.get('/wonders', function(req, res) {
  Wonders.find(function(err,scores) {
    if(err)
      res.send(err);

    res.json(scores);
  });
});

// get a 7 wonders score by id
router.get('/wonders/:id', function(req,res){
  // TODO
});

// create new 7wonders score
router.post('/wonders', function(req,res) {
  var score = new Wonders();

  score.date = req.body.date;
  score.gamenumber = req.body.gamenumber;
  score.playername = req.body.playername;
  score.playercount = req.body.playercount;
  score.military = req.body.military;
  score.money = req.body.money;
  score.debt = req.body.debt;
  score.wonder = req.body.wonder;
  score.civic = req.body.civic;
  score.commerce= req.body.commerce;
  score.science = req.body.science;
  score.guild = req.body.guild;
  score.leaders = req.body.leaders;
  score.total = req.body.total;

  score.save(function(err) {
    if(err)
      res.send(err);

    res.json({message: 'score added to 7wonders db'});
  });
});
// update a 7wonders score by id
router.put('/wonders/:id', function(req, res) {
    // TODO
});

// delete by id
router.delete('/tribes/:id', function(req,res) {
  // TODO
});

/** empires: age of discovery api
 *
 */

 router.get('/empires', function(req,res) {
   Empires.find(function(err, scores){
     if(err)
        res.send(err);

      res.json(scores);
   });
 });

router.get('/tribes/:id', function(req,res) {
  // TODO
});

router.post('/empires', function(req, res) {
  var score = new Empires();

  empires.date = req.body.date;
  empires.gamenumber = req.body.gamenumber;
  empires.playername = req.body.playername;
  empires.playercount = req.body.playercount;
  empires.age1colonies = req.body.age1colonies;
  empires.age1buy = req.body.age1buy;
  empires.age2colonies = req.body.age2colonies;
  empires.age2buy = req.body.age2buy;
  empires.age3colonoes = req.body.age3colonies;
  empires.age3buy = req.body.age3buy;
  empires.age3discoveries = req.body.age3discoveries;
  empires.age3capitalbuildings = req.body.age3capitalbuildings;
  empires.age3economy = req.body.age3economy;
  empires.total = req.body.total;

  score.save(function(err) {
    if(err)
      res.send(err);

    res.json({ message: 'score added to empires db'});
  });
});

router.put('/empires/:id', function(req, res) {
  // TODO
});

router.delete('/empires/:id', function(req, res) {
  // TODO
});

// all others return index
app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file
});



// listen (start app with node server.js)
app.listen(8080);
console.log("App listening on port 8080");
