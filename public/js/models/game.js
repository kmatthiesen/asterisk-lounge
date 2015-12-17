var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  owner: String,
  publisher: String
});

module.exports = mongoose.model('Game', GameSchema);
