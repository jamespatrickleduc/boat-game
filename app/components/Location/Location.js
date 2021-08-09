import { useContext } from "react";
import { TYPES, LOCATION, FISH } from "../../../constants/constants";
import { useGameContext } from "../../contexts/gameContext";
import Image from "next/image";

import styles from "../../styles/Location.module.css";

const F = TYPES.FISH;
const L = TYPES.LOCATION;

const Location = ({ name }) => {
  const { gameState } = useGameContext();
  const { players, locations } = gameState;

  const occupants = (function () {
    if (!players || !gameState?.isFishing) return [];
    return players
      .map((playerID) => {
        const fish = gameState.catch["player." + playerID][0];
        const caughtOne = !!fish;
        // console.log(playerID, gameState.catch["player." + playerID]);

        if (gameState["player." + playerID]?.location === name) {
          return (
            <div key={playerID} className={styles.fisherman}>
              <div style={{ display: "relative" }}>
                {gameState["player." + playerID].name}
              </div>
              {caughtOne ? (
                <>
                  <div key={Date.now()} className={styles.fishy}>
                    <Image
                      src={FISH[fish].img}
                      alt="fish"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className={styles.rewardAmount}>+{FISH[fish].gold}</div>
                </>
              ) : (
                <div className={styles.noBites}>no bites</div>
              )}
            </div>
          );
        }
        return false;
      })
      .filter((el) => el !== false);
  })();

  return (
    <div className={styles.location}>
      <div className={styles.stats}>
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
          </>
        )}
      </div>
      {occupants}
    </div>
  );
};

export default Location;
