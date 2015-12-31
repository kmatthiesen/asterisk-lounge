var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wondersSchema = new Schema({
  date: String,
  gamenumber: Number,
  playername: String,
  playercount: Number,
  military: Number,
  money: Number,
  debt: Number,
  wonder: Number,
  civic: Number,
  commerce: Number,
  science: Number,
  guild: Number,
  leaders: Number,
  total: Number
});

module.exports = mongoose.model('Wonders', wondersSchema);
