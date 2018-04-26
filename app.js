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
    if (req.body.team == 'all') {
        console.log('all');
        Team.find({}).sort({city:'asc'}).exec(function(err, allTeams){
            if (err) {
                console.log(err);
            } else {
                Player.find({}).lean().exec(function (err, allPlayers) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(allTeams);
                        allPlayers.forEach(function (playerObj) {  

                            allTeams.forEach(function(teamObj){
                                if(playerObj.team_id == teamObj._id){
                                    playerObj.team = teamObj;
                                }
                            });
                            
                        });
                        res.json(allPlayers);
                    }
                });
            }
        }); 
    } else {
        Player.find({ team_id: req.body.team }).lean().exec(function(err, players){
            if(err){
                console.log(err);
            } else {
                Team.findById(req.body.team, function(err, team){
                    if(err){
                        console.log(err);
                    } else {                  
                        players.forEach(function (obj) {
                            obj.team = team;
                        });

                        res.json(players);
                    }
                });
            }
        });
    }
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});