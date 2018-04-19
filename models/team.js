var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    _id: String,
    city: String,
    name: String,
    primaryColor: String,
    secondaryColor: String,
    img: String,
    conference: String
});

module.exports = mongoose.model('Team', teamSchema);