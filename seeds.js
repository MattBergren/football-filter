var Player = require('./models/player');
var Team = require('./models/team');

var playerData = [
    {
        firstName: "Tom",
        lastName: "Brady",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRA371156.png",
        team_id: "ne",
        passYds: 4577,
        passTds: 32,
        rushYds: 28,
        rushTds: 0,
        recYds: 0,
        recTds: 0,
        proBowler: true
    },
    {
        firstName: "Dion",
        lastName: "Lewis",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LEW218646.png",
        team_id: "ne",
        passYds: 0,
        passTds: 0,
        rushYds: 896,
        rushTds: 6,
        recYds: 214,
        recTds: 3,
        proBowler: false
    },
    {
        firstName: "Ben",
        lastName: "Roethlisberger ",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ROE750381.png",
        team_id: "pit",
        passYds: 4251,
        passTds: 28,
        rushYds: 47,
        rushTds: 0,
        recYds: 0,
        recTds: 0,
        proBowler: false
    }
];

var teamData = [
    {
        _id: "ne",
        city: "New England",
        name: "Patriots",
        primaryColor: "#0C2340",
        seondaryColor: "#C8102E",
        img: "http://content.sportslogos.net/logos/7/151/thumbs/y71myf8mlwlk8lbgagh3fd5e0.gif",
        conference: "AFC"
    },
    {
        _id: "buf",
        city: "Buffalo",
        name: "Bills",
        primaryColor: "#003087",
        seondaryColor: "#C8102E",
        img: "http://content.sportslogos.net/logos/7/149/thumbs/n0fd1z6xmhigb0eej3323ebwq.gif",
        conference: "AFC"
    },
    {
        _id: "mia",
        city: "Miami",
        name: "Dolphins",
        primaryColor: "#008E97",
        seondaryColor: "#F58220",
        img: "http://content.sportslogos.net/logos/7/150/thumbs/15041052013.gif",
        conference: "AFC"
    },
    {
        _id: "nyj",
        city: "New York",
        name: "Jets",
        primaryColor: "#2A433A",
        seondaryColor: "#FFFFFF",
        img: "http://content.sportslogos.net/logos/7/152/thumbs/v7tehkwthrwefgounvi7znf5k.gif",
        conference: "AFC"
    },
    {
        _id: "pit",
        city: "Pittsburgh",
        name: "Steelers",
        primaryColor: "#FFB81C",
        seondaryColor: "#101820",
        img: "http://content.sportslogos.net/logos/7/156/thumbs/970.gif",
        conference: "AFC"
    },
    {
        _id: "bal",
        city: "Baltimore",
        name: "Ravens",
        primaryColor: "#24135F",
        seondaryColor: "#101820",
        img: "http://content.sportslogos.net/logos/7/153/thumbs/318.gif",
        conference: "AFC"
    },
    {
        _id: "cin",
        city: "Cincinnati",
        name: "Bengals",
        primaryColor: "#FC4C02",
        seondaryColor: "#101820",
        img: "http://content.sportslogos.net/logos/7/154/thumbs/403.gif",
        conference: "AFC"
    },
    {
        _id: "cle",
        city: "Cleveland",
        name: "Browns",
        primaryColor: "#382F2D",
        seondaryColor: "#EB3300",
        img: "http://content.sportslogos.net/logos/7/154/thumbs/403.gif",
        conference: "AFC"
    }

];

function seedDB(){
    // add a few teams to the team collection
    // teamData.forEach(function(seed){
    //     Team.create(seed, function(err, team){
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log(`added ${team}`);
    //         }
    //     });
    // });
    playerData.forEach(function (seed) {
        Player.create(seed, function (err, player) {
            if (err) {
                console.log(err);
            } else {
                console.log(`added ${player}`);
            }
        });
    });
}


module.exports = seedDB;