import { useContext } from "react";
import { TYPES, LOCATION, FISH } from "../../../constants/constants";
import { useGameContext } from "../../contexts/gameContext";

import styles from "../../styles/Location.module.css";

const F = TYPES.FISH;
const L = TYPES.LOCATION;

const Location = ({ name }) => {
  const { gameState } = useGameContext();
  const { players, locations } = gameState;

  const occupants = (function () {
    if (!players) return [];
    return Object.entries(players).map(([key, value]) => {
      if (value.location === name) return players[key].name;
      return false;
    });
  })();

  return (
    <div className={styles.location}>
      {locations && (
        <>
          {LOCATION[name].name}
          {Object.entries(locations[name]).map(([fish, stock], k) => {
            const { max, regen } = LOCATION[name].fish[F[fish]];
            return (
              <div key={k}>
                {FISH[F[fish]].name} stock: {stock}/{max} +{regen}
              </div>
            );
          })}
          {occupants}
        </>
      )}
    </div>
  );
};

export default Location;
