const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio");
const memory = require("feathers-memory");
const rx = require("feathers-reactive");

import { LOCATION, FISH, TYPES } from "../constants/constants";
const L = TYPES.LOCATION;
const F = TYPES.FISH;

const app = feathers()
  .configure(socketio())
  .configure(
    rx({
      idField: "id",
    })
  )
  .use("/games", memory());

const games = app.service("games");
games.create({
  id: "123",
  players: {
    one: {
      ready: false,
      name: "Amos",
      gold: 90,
      equipment: [],
      fish: null,
      location: null,
    },
    two: {
      ready: false,
      name: "Brian",
      gold: 0,
      equipment: [],
      fish: null,
      location: null,
    },
  },
  locations: {
    [L.RIVER]: {
      [F.TROUT]: LOCATION[L.RIVER].fish[F.TROUT].max,
    },
    [L.SHOAL]: {
      [F.TROUT]: LOCATION[L.SHOAL].fish[F.TROUT].max,
      [F.LOBSTER]: LOCATION[L.SHOAL].fish[F.LOBSTER].max,
    },
    [L.DEEP]: {
      [F.SQUID]: LOCATION[L.DEEP].fish[F.SQUID].max,
      [F.TUNA]: LOCATION[L.DEEP].fish[F.TUNA].max,
    },
  },
});

games
  .watch()
  .get("123")
  .subscribe((res) => {
    const allReady = Object.values(res.players)
      .map((el) => el.ready)
      .reduce((acc, cur) => acc && cur, true);
    console.log(allReady);
  });

app.on("connection", (connection) => app.channel("everybody").join(connection));
app.publish(() => app.channel("everybody"));

app
  .listen(3030)
  .on("listening", () =>
    console.log("Feathers Socket.io server running on localhost:3030")
  );
