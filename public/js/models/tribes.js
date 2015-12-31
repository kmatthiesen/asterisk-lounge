var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tribesSchema = new Schema({
  date: String,
  gamenumber: Number,
  playername: String,
  playercount: Number,
  gold: Number,
  yellow: Number,
  white: Number,
  djinn: Number,
  camel: Number,
  palm: Number,
  palace: Number,
  resource: Number,
  total: Number
});

module.exports = mongoose.model('Tribes', tribesSchema);
