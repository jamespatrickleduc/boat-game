import { createContext, useContext, useState, useCallback } from "react";
import client from "../feathersClient";
import { EQUIPMENT, FISH, LOCATION } from "../../constants/constants";

const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState({});
  const [displayTurn, setDisplayTurn] = useState(1);
  const [displayGameOver, setDisplayGameOver] = useState(false);

  const initGameState = (gameID) => {
    client
      .service("games")
      .watch()
      .get(gameID)
      .subscribe((res) => {
        setGameState(res);
      });

    return new Promise((resolve, reject) => {
      client
        .service("games")
        .get("123")
        .then((res) => {
          console.log(res);
          setDisplayTurn(res.turn + 1);
          setDisplayGameOver(res.gameOver);
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  const initPlayerState = (playerID) => {
    // get gameID that playerID is associated with
    return initGameState("123");
  };

  const animateFishing = () => {
    const iterations = Math.max(
      ...Object.values(gameState.catch).map((el) => el.length)
    );

    let i = 0;
    const interval = setInterval(() => {
      // console.log("animate fishing");

      const newState = Object.assign({}, gameState);

      gameState.players.forEach((playerID) => {
        const fish = gameState.catch["player." + playerID].shift();
        const { location } = gameState["player." + playerID];
        // console.log(location, fish);
        if (fish) {
          newState["player." + playerID].gold += FISH[fish].gold;
          newState.locations[location][fish]--;
        }
      });

      i++;
      if (i >= iterations) {
        clearInterval(interval);
        newState.isFishing = false;
        newState.catch = {};

        if (!gameState.gameOver) setDisplayTurn(gameState.turn + 1);
        else setDisplayGameOver(true);

        // restock fish
        Object.entries(newState.locations).forEach(([location, value]) => {
          Object.keys(value).forEach((fish) => {
            newState.locations[location][fish] +=
              LOCATION[location].fish[fish].regen;
            newState.locations[location][fish] = Math.min(
              newState.locations[location][fish],
              LOCATION[location].fish[fish].max
            );
          });
        });
        client.service("games").patch("123", newState);
      }

      setGameState(newState);
    }, 2000);
  };

  const buyEquipment = (playerID, equipment) => {
    const player = gameState["player." + playerID];
    if (player.gold < EQUIPMENT[equipment].cost) return;
    if (player.equipment.includes(equipment)) return;

    player.gold -= EQUIPMENT[equipment].cost;
    player.equipment = [equipment, ...player.equipment];

    client.service("games").patch("123", { ["player." + playerID]: player });
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        initGameState,
        initPlayerState,
        buyEquipment,
        animateFishing,
        displayTurn,
        displayGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
