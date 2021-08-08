import { useContext } from "react";
import { useGameContext } from "../../contexts/gameContext";
import styles from "../../styles/GamePlayerSection.module.css";
import { EQUIPMENT } from "../../../constants/constants";
import GameStore from "../../contexts/gameContext";
import Card from "@material-ui/core/Card";

const GamePlayerSection = ({ id }) => {
  const { gameState } = useGameContext();
  const playerState = gameState["player." + id];

  return (
    <div className={styles.player}>
      {!!playerState ? (
        <div>
          <div>{playerState.name} </div>
          <div>Gold: {playerState.gold}G </div>
          <div>Fish: {playerState.fish} </div>
          <div>Location: {playerState.location} </div>
          <div>{playerState.ready ? "Ready" : "Not Ready"}</div>
          <div>Equipment:</div>
          <ul>
            {playerState.equipment.map((equip, e) => {
              return <li key={e}>{EQUIPMENT[equip].name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default GamePlayerSection;
