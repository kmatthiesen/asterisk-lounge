var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpiresSchema = new Schema({
    date: String,
    gamenumber: Number,
    playername: String,
    playercount: Number,
    age1colonies:  Number,
    age1buy: Number,
    age2colonies: Number,
    age2buy: Number,
    age3colonies:Number,
    age3buy: Number,
    age3discoveries: Number,
    age3capitalbuildings: Number,
    age3economy: Number,
    total: Number
});

module.exports = mongoose.model('Empires', EmpiresSchema);
