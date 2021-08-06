const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
import { TYPES, LOCATION } from "../constants/constants.js";
const { FISH: F, LOCATION: L, EQUIPMENT: E } = TYPES;

const games = {};
const players = {};

games["123"] = {
  players: {
    one: {
      ready: false,
      name: "Amos",
      gold: 1,
      equipment: [E.LOBSTERPOT],
    },
    two: {
      ready: false,
      name: "Brian",
      gold: 1,
      equipment: [],
    },
    three: {
      ready: false,
      name: "Carlos",
      gold: 1,
      equipment: [],
    },
    four: {
      ready: false,
      name: "DeAndre",
      gold: 1,
      equipment: [],
    },
  },
  // locations: {
  //   [L.RIVER]: {
  //     [F.TROUT]: LOCATION[L.RIVER].fish[F.TROUT].max,
  //   },
  //   [L.SHOAL]: {
  //     [F.TROUT]: LOCATION[L.SHOAL].fish[F.TROUT].max,
  //     [F.LOBSTER]: LOCATION[L.SHOAL].fish[F.LOBSTER].max,
  //   },
  //   [L.DEEP]: {
  //     [F.SQUID]: LOCATION[L.DEEP].fish[F.SQUID].max,
  //     [F.TUNA]: LOCATION[L.DEEP].fish[F.TUNA].max,
  //   },
  // },
};

players.one = "123";
players.two = "123";
players.three = "123";
players.four = "123";

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("game", (msg) => {
    console.log(msg);
    const { gameID } = msg;
    socket.emit("init", games[gameID]);
  });
  socket.on("player", (msg) => {
    console.log(msg);
    const { playerID } = msg;
    socket.emit("init", games[players[playerID]]);
  });
});

server.listen(3030, () => {
  console.log("listening on *:3030");
});
