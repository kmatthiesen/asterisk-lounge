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

// listen (start app with node server.js)
app.listen(8080);
console.log("App listening on port 8080");

app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file
});
