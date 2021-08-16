import { LOCATION, FISH, TYPES, TURN_LIMIT } from "../constants/constants";
const L = TYPES.LOCATION;
const F = TYPES.FISH;

let games;

const initialize = (app) => {
  games = app.service("games");
  games.create({
    id: "123",
    isFishing: false,
    catch: {},
    gameOver: false,
    turn: 0,
    players: ["one", "two"],
    "player.one": {
      ready: false,
      name: "Jendy",
      gold: 0,
      equipment: [],
      fish: F.TROUT,
      location: L.RIVER,
    },
    "player.two": {
      ready: false,
      name: "Patrick",
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
      // console.log(allReady);
      console.log(res);

      if (!res.gameOver) {
        if (allReady && !res.isFishing) {
          goFishing("123");
        }
      } else {
        console.log("the game is over");
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
    gameState.turn++;
    // end game
    if (gameState.turn >= TURN_LIMIT) gameState.gameOver = true;
    games.patch(gameID, gameState);
  });
};

export default { initialize };
