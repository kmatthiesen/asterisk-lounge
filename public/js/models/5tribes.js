var mongoose = require('mongoose'); // may need to change this since i now have multiple models
var Schema = mongoose.Schema;

var 5tribesSchema = new Schema({
  date: String,
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

module.exports = mongoose.model('5tribes', 5tribesSchema);
