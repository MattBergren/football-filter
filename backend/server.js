const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const asyncHandler = require("express-async-handler");

// data models
const Player = require("./models/player");
const Team = require("./models/team");

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB database
// const dbRoute = "mongodb://bergy:password@ds247569.mlab.com:47569/football-filter";
// const dbRoute = "mongodb://localhost/football-filter";

// connects our back end code with the database
// mongoose.connect(
//   dbRoute,
//   { useNewUrlParser: true }
// );

// let db = mongoose.connection;

// db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(logger("dev"));

app.get(
  "/api/allTeams",
  asyncHandler(async (req, res) => {
    const allTeams = await Team.find({}).sort({ city: "asc" });
    res.status(200).json(allTeams);
  })
);

app.post("/api/players", function (req, res) {
  // all teams - all positions - no probowl
  if (
    req.body.team === "all" &&
    req.body.position === "all" &&
    req.body.proBowl === false
  ) {
    Team.find({})
      .sort({ city: "asc" })
      .exec(function (err, allTeams) {
        if (err) {
          console.log(err);
        } else {
          Player.find({})
            .sort({ team_id: "asc" })
            .lean()
            .exec(function (err, allPlayers) {
              if (err) {
                console.log(err);
              } else {
                allPlayers.forEach(function (playerObj) {
                  allTeams.forEach(function (teamObj) {
                    if (playerObj.team_id == teamObj._id) {
                      playerObj.team = teamObj;
                    }
                  });
                });
                res.json(allPlayers);
              }
            });
        }
      });
  }
  // all teams - all positions - probowl
  else if (
    req.body.team === "all" &&
    req.body.position === "all" &&
    req.body.proBowl === true
  ) {
    Team.find({})
      .sort({ city: "asc" })
      .exec(function (err, allTeams) {
        if (err) {
          console.log(err);
        } else {
          Player.find({ proBowler: req.body.proBowl })
            .lean()
            .exec(function (err, allPlayers) {
              if (err) {
                console.log(err);
              } else {
                allPlayers.forEach(function (playerObj) {
                  allTeams.forEach(function (teamObj) {
                    if (playerObj.team_id == teamObj._id) {
                      playerObj.team = teamObj;
                    }
                  });
                });
                res.json(allPlayers);
              }
            });
        }
      });
  }
  // all teams - position - no probowl
  else if (
    req.body.team === "all" &&
    req.body.position !== "all" &&
    req.body.proBowl === false
  ) {
    Team.find({})
      .sort({ city: "asc" })
      .exec(function (err, allTeams) {
        if (err) {
          console.log(err);
        } else {
          if (req.body.position === "QB") {
            Player.find({ position: req.body.position })
              .sort({ passYds: "desc" })
              .lean()
              .exec(function (err, allPlayers) {
                if (err) {
                  console.log(err);
                } else {
                  allPlayers.forEach(function (playerObj) {
                    allTeams.forEach(function (teamObj) {
                      if (playerObj.team_id == teamObj._id) {
                        playerObj.team = teamObj;
                      }
                    });
                  });
                  res.json(allPlayers);
                }
              });
          } else if (req.body.position === "RB") {
            Player.find({ position: req.body.position })
              .sort({ rushYds: "desc" })
              .lean()
              .exec(function (err, allPlayers) {
                if (err) {
                  console.log(err);
                } else {
                  allPlayers.forEach(function (playerObj) {
                    allTeams.forEach(function (teamObj) {
                      if (playerObj.team_id == teamObj._id) {
                        playerObj.team = teamObj;
                      }
                    });
                  });
                  res.json(allPlayers);
                }
              });
          } else {
            Player.find({ position: req.body.position })
              .sort({ recYds: "desc" })
              .lean()
              .exec(function (err, allPlayers) {
                if (err) {
                  console.log(err);
                } else {
                  allPlayers.forEach(function (playerObj) {
                    allTeams.forEach(function (teamObj) {
                      if (playerObj.team_id == teamObj._id) {
                        playerObj.team = teamObj;
                      }
                    });
                  });
                  res.json(allPlayers);
                }
              });
          }
        }
      });
  }
  // all teams - position - probowl
  else if (
    req.body.team === "all" &&
    req.body.position !== "all" &&
    req.body.proBowl === true
  ) {
    Team.find({})
      .sort({ city: "asc" })
      .exec(function (err, allTeams) {
        if (err) {
          console.log(err);
        } else {
          Player.find({
            position: req.body.position,
            proBowler: req.body.proBowl,
          })
            .lean()
            .exec(function (err, allPlayers) {
              if (err) {
                console.log(err);
              } else {
                allPlayers.forEach(function (playerObj) {
                  allTeams.forEach(function (teamObj) {
                    if (playerObj.team_id == teamObj._id) {
                      playerObj.team = teamObj;
                    }
                  });
                });
                res.json(allPlayers);
              }
            });
        }
      });
  }
  // team - all positions - no probowl
  else if (
    req.body.team !== "all" &&
    req.body.position === "all" &&
    req.body.proBowl === false
  ) {
    Team.findById(req.body.team, function (err, currentTeam) {
      if (err) {
        console.log(err);
      } else {
        Player.find({ team_id: req.body.team })
          .lean()
          .exec(function (err, allPlayers) {
            if (err) {
              console.log(err);
            } else {
              allPlayers.forEach(function (playerObj) {
                if (playerObj.team_id == currentTeam._id) {
                  playerObj.team = currentTeam;
                }
              });
              res.json(allPlayers);
            }
          });
      }
    });
  }
  // team - all positions - probowl
  else if (
    req.body.team !== "all" &&
    req.body.position === "all" &&
    req.body.proBowl === true
  ) {
    Team.findById(req.body.team, function (err, currentTeam) {
      if (err) {
        console.log(err);
      } else {
        Player.find({ team_id: req.body.team, proBowler: req.body.proBowl })
          .lean()
          .exec(function (err, allPlayers) {
            if (err) {
              console.log(err);
            } else {
              allPlayers.forEach(function (playerObj) {
                if (playerObj.team_id == currentTeam._id) {
                  playerObj.team = currentTeam;
                }
              });
              res.json(allPlayers);
            }
          });
      }
    });
  }
  // team - position - no probowl
  else if (
    req.body.team !== "all" &&
    req.body.position !== "all" &&
    req.body.proBowl === false
  ) {
    Player.find({ team_id: req.body.team, position: req.body.position })
      .lean()
      .exec(function (err, players) {
        console.log(req.body);
        if (err) {
          console.log(err);
        } else {
          Team.findById(req.body.team, function (err, team) {
            if (err) {
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
  // team - position - probowl
  else {
    Player.find({
      team_id: req.body.team,
      position: req.body.position,
      proBowler: req.body.proBowl,
    })
      .lean()
      .exec(function (err, players) {
        console.log(req.body);
        if (err) {
          console.log(err);
        } else {
          Team.findById(req.body.team, function (err, team) {
            if (err) {
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

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // FIX: below code fixes app crashing on refresh in deployment
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
