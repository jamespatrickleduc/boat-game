import styles from "../../styles/Environment.module.css";
import { useGameContext } from "../../contexts/gameContext";
import { LOCATION } from "../../../constants/constants";
import Location from "../Location/Location";

const Environment = () => {
  const { gameState, displayTurn, displayGameOver } = useGameContext();

  console.log(gameState);

  return (
    <div className={styles.environment}>
      <div>Environment</div>

      {displayGameOver ? (
        <div>GAME IS OVER!</div>
      ) : (
        <div>Turn: {displayTurn}</div>
      )}
      {Object.keys(LOCATION).map((key) => {
        return <Location key={key} name={key} />;
      })}
    </div>
  );
};

export default Environment;
