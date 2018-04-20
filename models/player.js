var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    position: String,
    image: String,
    team_id: String,
    passYds: Number,
    passTds: Number,
    passInt: Number,
    rushYds: Number,
    rushTds: Number,
    recYds: Number,
    recTds: Number,
    proBowler: Boolean
});

module.exports = mongoose.model('Player', playerSchema);