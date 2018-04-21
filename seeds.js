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
    },
    {
        firstName: "Kurt",
        lastName: "Cousins",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/COU709400.png",
        team_id: "was",
        passYds: 4093,
        passTds: 27,
        passInt: 13,
        proBowler: false
    },
    {
        firstName: "Samaje",
        lastName: "Perine",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PER095343.png",
        team_id: "was",
        rushYds: 603,
        rushTds: 1,
        recYds: 182,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Vernon",
        lastName: "Davis",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAV785142.png",
        team_id: "was",
        recYds: 648,
        recTds: 3,
        proBowler: false
    },
    {
        firstName: "Jamison",
        lastName: "Crowder",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CRO697273.png",
        team_id: "was",
        recYds: 789,
        recTds: 3,
        proBowler: false
    },
    {
        firstName: "Case",
        lastName: "Keenum",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KEE690598.png",
        team_id: "min",
        passYds: 3547,
        passTds: 22,
        passInt: 7,
        proBowler: false
    },
    {
        firstName: "Latavius",
        lastName: "Murray",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MUR671046.png",
        team_id: "min",
        rushYds: 842,
        rushTds: 8,
        recYds: 103,
        recTds: 0,
        proBowler: false
    },
    {
        firstName: "Kyle",
        lastName: "Rudolph",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/RUD559717.png",
        team_id: "min",
        recYds: 532,
        recTds: 8,
        proBowler: false
    },
    {
        firstName: "Adam",
        lastName: "Thielen",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/THI510348.png",
        team_id: "min",
        recYds: 1276,
        recTds: 4,
        proBowler: true
    },
    {
        firstName: "Matthew",
        lastName: "Stafford",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/STA134157.png",
        team_id: "det",
        passYds: 4446,
        passTds: 29,
        passInt: 10,
        proBowler: false
    },
    {
        firstName: "Ameer",
        lastName: "Abdullah",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ABD647726.png",
        team_id: "det",
        rushYds: 552,
        rushTds: 4,
        recYds: 162,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Eric",
        lastName: "Ebron",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/EBR474619.png",
        team_id: "det",
        recYds: 574,
        recTds: 4,
        proBowler: false
    },
    {
        firstName: "Marvin",
        lastName: "Jones",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JON601697.png",
        team_id: "det",
        recYds: 1101,
        recTds: 9,
        proBowler: false
    },
    {
        firstName: "Aaron",
        lastName: "Rodgers",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ROD339293.png",
        team_id: "gb",
        passYds: 1675,
        passTds: 16,
        passInt: 6,
        proBowler: false
    },
    {
        firstName: "Jamaal",
        lastName: "Williams",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WIL328269.png",
        team_id: "gb",
        rushYds: 556,
        rushTds: 4,
        recYds: 262,
        recTds: 2,
        proBowler: false
    },
    {
        firstName: "Lance",
        lastName: "Kendricks",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KEN102780.png",
        team_id: "gb",
        recYds: 203,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Davante",
        lastName: "Adams",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ADA218591.png",
        team_id: "gb",
        recYds: 885,
        recTds: 10,
        proBowler: false
    },
    {
        firstName: "Mitchell",
        lastName: "Trubisky",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TRU215336.png",
        team_id: "chi",
        passYds: 2193,
        passTds: 7,
        passInt: 7,
        proBowler: false
    },
    {
        firstName: "Jordan",
        lastName: "Howard",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOW239418.png",
        team_id: "chi",
        rushYds: 1122,
        rushTds: 9,
        recYds: 125,
        recTds: 0,
        proBowler: false
    },
    {
        firstName: "Zach",
        lastName: "Miller",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIL625333.png",
        team_id: "chi",
        recYds: 236,
        recTds: 2,
        proBowler: false
    },
    {
        firstName: "Kendall",
        lastName: "Wright",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WRI486076.png",
        team_id: "chi",
        recYds: 614,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Cam",
        lastName: "Newton",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NEW693984.png",
        team_id: "car",
        passYds: 3202,
        passTds: 22,
        passInt: 16,
        proBowler: false
    },
    {
        firstName: "Jonathan",
        lastName: "Stewart",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/STE770966.png",
        team_id: "car",
        rushYds: 680,
        rushTds: 6,
        recYds: 52,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Ed",
        lastName: "Dickson",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DIC709336.png",
        team_id: "car",
        recYds: 437,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Devin",
        lastName: "Funchess",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/FUN405541.png",
        team_id: "car",
        recYds: 840,
        recTds: 8,
        proBowler: false
    },
    {
        firstName: "Matt",
        lastName: "Ryan",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/RYA238179.png",
        team_id: "atl",
        passYds: 4095,
        passTds: 20,
        passInt: 12,
        proBowler: false
    },
    {
        firstName: "Devonta",
        lastName: "Freeman",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/FRE174508.png",
        team_id: "atl",
        rushYds: 865,
        rushTds: 7,
        recYds: 317,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Austin",
        lastName: "Hooper",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOO570770.png",
        team_id: "atl",
        recYds: 526,
        recTds: 3,
        proBowler: false
    },
    {
        firstName: "Julio",
        lastName: "Jones",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JON640315.png",
        team_id: "atl",
        recYds: 1444,
        recTds: 3,
        proBowler: true
    },
    {
        firstName: "Jameis",
        lastName: "Winston",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WIN623708.png",
        team_id: "tb",
        passYds: 3504,
        passTds: 19,
        passInt: 11,
        proBowler: false
    },
    {
        firstName: "Doug",
        lastName: "Martin",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAR578568.png",
        team_id: "tb",
        rushYds: 406,
        rushTds: 3,
        recYds: 84,
        recTds: 0,
        proBowler: false
    },
    {
        firstName: "Cameron",
        lastName: "Brate",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRA663798.png",
        team_id: "tb",
        recYds: 591,
        recTds: 6,
        proBowler: false
    },
    {
        firstName: "Mike",
        lastName: "Evans",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/EVA534309.png",
        team_id: "tb",
        recYds: 1001,
        recTds: 5,
        proBowler: false
    },
    {
        firstName: "Drew",
        lastName: "Brees",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRE229498.png",
        team_id: "nor",
        passYds: 4334,
        passTds: 23,
        passInt: 8,
        proBowler: false
    },
    {
        firstName: "Mark",
        lastName: "Ingram",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ING656964.png",
        team_id: "nor",
        rushYds: 1124,
        rushTds: 12,
        recYds: 416,
        recTds: 0,
        proBowler: true
    },
    {
        firstName: "Colby",
        lastName: "Fleener",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/FLE075352.png",
        team_id: "nor",
        recYds: 295,
        recTds: 2,
        proBowler: false
    },
    {
        firstName: "Michael",
        lastName: "Thomas",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/THO308912.png",
        team_id: "nor",
        recYds: 1245,
        recTds: 5,
        proBowler: true
    },
    {
        firstName: "Alvin",
        lastName: "Kamara",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KAM244058.png",
        team_id: "nor",
        rushYds: 728,
        rushTds: 8,
        recYds: 826,
        recTds: 5,
        proBowler: true
    },
    {
        firstName: "Jared",
        lastName: "Goff",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GOF219636.png",
        team_id: "lar",
        passYds: 3804,
        passTds: 28,
        passInt: 7,
        proBowler: true
    },
    {
        firstName: "Todd",
        lastName: "Gurley",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GUR000000.png",
        team_id: "lar",
        rushYds: 1305,
        rushTds: 13,
        recYds: 788,
        recTds: 6,
        proBowler: true
    },
    {
        firstName: "Tyler",
        lastName: "Higbee",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HIG033222.png",
        team_id: "lar",
        recYds: 295,
        recTds: 1,
        proBowler: false
    },
    {
        firstName: "Cooper",
        lastName: "Kupp",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KUP534597.png",
        team_id: "lar",
        recYds: 869,
        recTds: 5,
        proBowler: false
    },
    {
        firstName: "Russell",
        lastName: "Wilson",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WIL777781.png",
        team_id: "sea",
        passYds: 3983,
        passTds: 34,
        passInt: 11,
        proBowler: true
    },
    {
        firstName: "Mike",
        lastName: "Davis",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAV567050.png",
        team_id: "sea",
        rushYds: 240,
        rushTds: 0,
        recYds: 131,
        recTds: 0,
        proBowler: false
    },
    {
        firstName: "Jimmy",
        lastName: "Graham",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GRA207087.png",
        team_id: "sea",
        recYds: 520,
        recTds: 11,
        proBowler: true
    },
    {
        firstName: "Doug",
        lastName: "Baldwin",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL312014.png",
        team_id: "sea",
        recYds: 991,
        recTds: 8,
        proBowler: false
    },
    {
        firstName: "Carson",
        lastName: "Palmer",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PAL249055.png",
        team_id: "arz",
        passYds: 1978,
        passTds: 9,
        passInt: 7,
        proBowler: false
    },
    {
        firstName: "Adrian",
        lastName: "Peterson",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PET260705.png",
        team_id: "arz",
        rushYds: 529,
        rushTds: 2,
        recYds: 66,
        recTds: 0,
        proBowler: false
    },
    {
        firstName: "Jermaine",
        lastName: "Gresham",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GRE819895.png",
        team_id: "arz",
        recYds: 322,
        recTds: 2,
        proBowler: false
    },
    {
        firstName: "Larry",
        lastName: "Fitzgerald",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/FIT437493.png",
        team_id: "arz",
        recYds: 1156,
        recTds: 6,
        proBowler: true
    },
    {
        firstName: "Jimmy",
        lastName: "Garoppoli",
        position: "QB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GAR363225.png",
        team_id: "sf",
        passYds: 1560,
        passTds: 7,
        passInt: 5,
        proBowler: false
    },
    {
        firstName: "Carlos",
        lastName: "Hyde",
        position: "RB",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HYD402541.png",
        team_id: "sf",
        rushYds: 938,
        rushTds: 8,
        recYds: 350,
        recTds: 0,
        proBowler: false
    },
    {
        firstName: "George",
        lastName: "Kittle",
        position: "TE",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KIT388290.png",
        team_id: "sf",
        recYds: 515,
        recTds: 2,
        proBowler: false
    },
    {
        firstName: "Marquise",
        lastName: "Goodwin",
        position: "WR",
        image: "http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GOO681722.png",
        team_id: "sf",
        recYds: 962,
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