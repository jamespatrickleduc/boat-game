import { createContext, useContext, useState, useCallback } from "react";
import client from "../feathersClient";
import { EQUIPMENT } from "../../constants/constants";

const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState({});

  const initGameState = (gameID) => {
    client
      .service("games")
      .watch()
      .get(gameID)
      .subscribe((res) => {
        console.log(res);
        setGameState(res);
      });
  };

  const initPlayerState = (playerID) => {
    client
      .service("games")
      .watch()
      .get("123")
      .subscribe((res) => {
        console.log(res);
        setGameState(res);
      });
  };

  const togglePlayerReady = (playerID) => {};

  const buyEquipment = (playerID, equipment) => {
    const players = gameState.players;
    if (players[playerID].gold < EQUIPMENT[equipment].cost) return;
    if (players[playerID].equipment.includes(equipment)) return;

    players[playerID].gold -= EQUIPMENT[equipment].cost;
    players[playerID].equipment = [equipment, ...players[playerID].equipment];

    client.service("games").patch("123", { players });
  };

  return (
    <GameContext.Provider
      value={{ gameState, initGameState, initPlayerState, buyEquipment }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
