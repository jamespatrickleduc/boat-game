import { LOCATION, FISH, TYPES } from "../constants/constants";
const L = TYPES.LOCATION;
const F = TYPES.FISH;

let games;

const initialize = (app) => {
  games = app.service("games");
  games.create({
    id: "123",
    isFishing: false,
    catch: {},
    players: ["one", "two"],
    "player.one": {
      ready: false,
      name: "Amos",
      gold: 90,
      equipment: [],
      fish: F.TROUT,
      location: L.RIVER,
    },
    "player.two": {
      ready: false,
      name: "Brian",
      gold: 0,
      equipment: [],
      fish: F.TROUT,
      location: L.RIVER,
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

  attachSubscriptions();
};

const attachSubscriptions = () => {
  // ready watcher
  games
    .watch()
    .get("123")
    .subscribe((res) => {
      const allReady = res.players
        .map((playerID) => res["player." + playerID].ready)
        .reduce((acc, cur) => acc && cur, true);
      console.log(allReady);
      console.log(res);
      if (allReady && !res.isFishing) {
        goFishing("123");
      }
    });
};

const goFishing = (gameID) => {
  console.log("go fishing", gameID);
  games.get(gameID).then((gameState) => {
    gameState.isFishing = true;
    gameState.players.forEach((playerID) => {
      gameState["player." + playerID].ready = false;
    });

    gameState.players.forEach((playerID) => {
      gameState.catch["player." + playerID] = [];
    });

    const iterations = 3;
    for (let i = 0; i < iterations; i++) {
      gameState.players.forEach((playerID) => {
        const { location, fish } = gameState["player." + playerID];

        const caughtOne =
          Math.random() <=
          FISH[fish].chance *
            (gameState.locations[location][fish] /
              LOCATION[location].fish[fish].max);

        gameState.catch["player." + playerID].push(caughtOne ? fish : null);
      });
    }

    games.patch(gameID, gameState);
  });
};

export default { initialize };
