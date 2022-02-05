// Import d'express :
const express = require("express");
const app = express();

// MiddleWare
app.use(express.json());

const morgan = require('morgan');
app.use(morgan('tiny'));  

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Import de la DB
const playersPath = "./src/db/player.db.json";
let players = require(playersPath);

// Import de fs
const fs = require("fs");
const { createImportTypeNode } = require("typescript");

// Définition du port :
const port = process.env.PORT || 8080;


// Functions

/**
 * Ecrire dans le JSON
 */
function newPlayer(newPlayer) {
  newPlayer.id = checkId(newPlayer.id);
  players.push(newPlayer);
  players = JSON.stringify(players);
  fs.writeFile(playersPath, players, (err) => {
    if (err) console.log(err);
    console.log(newPlayer);
  });
}

function checkId(newPlayerId) {
  const playersCount = players.length;
  newPlayerId = playersCount + 1;
  return newPlayerId;
}

function update(updatePlayer) {
  players = players.filter((player) => {return player.id !== updatePlayer.id})
  players.push(updatePlayer)
  players = JSON.stringify(players);
  fs.writeFile(playersPath, players, (err) => {
    if (err) console.log(err);
    console.log(newPlayer);
  });
}

// Players route :

//GET
app.get("/players", (req, res) => {
  res.status(200).json(players);
});

//POST
app.post("/players", (req, res) => {
  newPlayer(req.body);
  res.status(200).json(players);
});

// player/Id routes :

// GET
app.get("/players/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const player = players.find((player) => player.id === id);
    res.status(200).json(player);
});

// Put
app.put("/players/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let player = players.find((player) => player.id === id);
  let updatePlayer = req.body;
  update(updatePlayer)
  res.status(200).json(player);

})


// HEY, LISTEN !
app.listen(port, () => {
  console.log("Listening !");
});
