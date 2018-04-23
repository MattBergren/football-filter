var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require('method-override');

var Player = require('./models/player');
var Team = require('./models/team');

var seedDB = require('./seeds');

mongoose.connect("mongodb://bergy:password@ds247569.mlab.com:47569/football-filter");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// seedDB();


app.get('/', function (req, res) {
    Team.find({}).sort({city:'asc'}).exec(function(err, allTeams){
        if(err) {
            console.log(err);
        } else {
            Player.find({}, function (err, allPlayers) {
                if (err) {
                    console.log(err);
                } else {
                    res.render('index', {
                        teams: allTeams,
                        players: allPlayers
                    });
                }
            });
        }
    });
});

app.post('/football', function (req, res) {
    Player.find({team_id: req.body.team}, function(err, player){
        if(err){
            console.log(err);
        } else {
            Team.findById(req.body.team, function(err, teamId){
                if(err){
                    console.log(err);
                } else {
                    var allData = {
                        player: player,
                        team: teamId
                    };
                    res.json(allData);
                }
            });
        }
    });
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});