var Player = require('./models/player');
var Team = require('./models/team');

var playerData = [
    {
        firstName: "Carson",
        lastName: "Wentz",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WEN615770.png",
        team_id: "phi",
        passYds: 3296,
        passTds: 33,
        passInt: 7,
        proBowler: true
    },
    {
        firstName: "Zach",
        lastName: "Ertz",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ERT800920.png",
        team_id: "phi",
        recYds: 824,
        recTds: 8,
        proBowler: true
    },
    {
        firstName: "LeGarrette",
        lastName: "Blount",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BLO626278.png",
        team_id: "phi",
        rushYds: 766,
        rushTds: 2,
        recYds: 50,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Alshon",
        lastName: "Jeffery",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JEF498860.png",
        team_id: "phi",
        recYds: 789,
        recTds: 9,
        proBowler: false
    },
    {
        firstName: "Dak",
        lastName: "Prescott",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PRE285723.png",
        team_id: "dal",
        passYds: 3324,
        passTds: 22,
        passInt: 13,
        proBowler: false
    },
    {
        firstName: "Ezekiel",
        lastName: "Elliot",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ELL289284.png",
        team_id: "dal",
        rushYds: 983,
        rushTds: 7,
        recYds: 269,
        recTds: 2,
        proBowler: false
    },
    {
        firstName: "Dez",
        lastName: "Bryant",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRY336027.png",
        team_id: "dal",
        recYds: 838,
        recTds: 6,
        proBowler: false
    },
    {
        firstName: "Jason",
        lastName: "Witten",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRY336027.png",
        team_id: "dal",
        recYds: 560,
        recTds: 5,
        proBowler: false
    },
    {
        firstName: "Eli",
        lastName: "Manning",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAN473170.png",
        team_id: "nyg",
        passYds: 3468,
        passTds: 19,
        passInt: 13,
        proBowler: false
    },
    {
        firstName: "Orleans",
        lastName: "Darkwa",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAR352254.png",
        team_id: "nyg",
        rushYds: 751,
        rushTds: 5,
        recYds: 116,
        recTds: 0,
        proBowler: false
    },
    {
        firstName: "Evan",
        lastName: "Engram",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ENG726325.png",
        team_id: "nyg",
        recYds: 722,
        recTds: 6,
        proBowler: false
    },
    {
        firstName: "Sterling",
        lastName: "Shepard",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SHE495754.png",
        team_id: "nyg",
        recYds: 731,
        recTds: 2,
        proBowler: false
    }
];

var teamData = [
    {
        _id: "phi",
        city: "Philadelphia",
        name: "Eagles",
        primaryColor: "#004C54",
        seondaryColor: "#A5ACAF",
        img: "http://content.sportslogos.net/logos/7/167/thumbs/960.gif",
        conference: "NFC"
    },
    {
        _id: "dal",
        city: "Dallas",
        name: "Cowboys",
        primaryColor: "#041E42",
        seondaryColor: "#869397",
        img: "http://content.sportslogos.net/logos/7/165/thumbs/406.gif",
        conference: "NFC"
    },
    {
        _id: "nyg",
        city: "New York",
        name: "Giants",
        primaryColor: "#0B2265",
        seondaryColor: "#A71930",
        img: "http://content.sportslogos.net/logos/7/166/thumbs/919.gif",
        conference: "NFC"
    },
    {
        _id: "was",
        city: "Washington",
        name: "Redskins",
        primaryColor: "#651D32",
        seondaryColor: "#FFB81C",
        img: "http://content.sportslogos.net/logos/7/168/thumbs/im5xz2q9bjbg44xep08bf5czq.gif",
        conference: "NFC"
    },
    {
        _id: "min",
        city: "Minnesota",
        name: "Vikings",
        primaryColor: "#4F2683",
        seondaryColor: "#FFC62F",
        img: "http://content.sportslogos.net/logos/7/172/thumbs/17227042013.gif",
        conference: "NFC"
    },
    {
        _id: "det",
        city: "Detriot",
        name: "Lions",
        primaryColor: "#0069B1",
        seondaryColor: "#A2AAAD",
        img: "http://content.sportslogos.net/logos/7/170/thumbs/17013982017.gif",
        conference: "NFC"
    },
    {
        _id: "gb",
        city: "Green Bay",
        name: "Packers",
        primaryColor: "#183028",
        seondaryColor: "#FFB81C",
        img: "http://content.sportslogos.net/logos/7/171/thumbs/dcy03myfhffbki5d7il3.gif",
        conference: "NFC"
    },
    {
        _id: "chi",
        city: "Chicago",
        name: "Bears",
        primaryColor: "#0B162A",
        seondaryColor: "#C83803",
        img: "http://content.sportslogos.net/logos/7/169/thumbs/364.gif",
        conference: "NFC"
    },
    {
        _id: "car",
        city: "Carolina",
        name: "Panthers",
        primaryColor: "#0085CA",
        seondaryColor: "#101820",
        img: "http://content.sportslogos.net/logos/7/174/thumbs/f1wggq2k8ql88fe33jzhw641u.gif",
        conference: "NFC"
    },
    {
        _id: "atl",
        city: "Atlanta",
        name: "Falcons",
        primaryColor: "#A6192E",
        seondaryColor: "#101820",
        img: "http://content.sportslogos.net/logos/7/173/thumbs/299.gif",
        conference: "NFC"
    },
    {
        _id: "tb",
        city: "Tampa Bay",
        name: "Buccaneers",
        primaryColor: "#C8102E",
        seondaryColor: "#3D3935",
        img: "http://content.sportslogos.net/logos/7/176/thumbs/17636702014.gif",
        conference: "NFC"
    },
    {
        _id: "nor",
        city: "New Orleans",
        name: "Saints",
        primaryColor: "#D3BC8D",
        seondaryColor: "#101820",
        img: "http://content.sportslogos.net/logos/7/175/thumbs/907.gif",
        conference: "NFC"
    },
    {
        _id: "lar",
        city: "Los Angeles",
        name: "Rams",
        primaryColor: "#041E42",
        seondaryColor: "#866D4B",
        img: "http://content.sportslogos.net/logos/7/5941/thumbs/594179532017.gif",
        conference: "NFC"
    },
    {
        _id: "sea",
        city: "Seattle",
        name: "Seahawks",
        primaryColor: "#0C2340",
        seondaryColor: "#78BE20",
        img: "http://content.sportslogos.net/logos/7/180/thumbs/pfiobtreaq7j0pzvadktsc6jv.gif",
        conference: "NFC"
    },
    {
        _id: "arz",
        city: "Arizona",
        name: "Cardinals",
        primaryColor: "#9B2743",
        seondaryColor: "#000000",
        img: "http://content.sportslogos.net/logos/7/177/thumbs/kwth8f1cfa2sch5xhjjfaof90.gif",
        conference: "NFC"
    },
    {
        _id: "sf",
        city: "San Francisco",
        name: "49ers",
        primaryColor: "#A6192E",
        seondaryColor: "#85714D",
        img: "http://content.sportslogos.net/logos/7/179/thumbs/17994552009.gif",
        conference: "NFC"
    }

];

function seedDB(){
    // teamData.forEach(function(seed){
    //     Team.create(seed, function(err, team){
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             console.log(`added ${team}`);
    //         }
    //     });
    // });
    // playerData.forEach(function (seed) {
    //     Player.create(seed, function (err, player) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(`added ${player}`);
    //         }
    //     });
    // });
}


module.exports = seedDB;