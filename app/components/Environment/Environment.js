import styles from "../../styles/Environment.module.css";
import { useGameContext } from "../../contexts/gameContext";
import { LOCATION } from "../../../constants/constants";
import Location from "../Location/Location";

const Environment = () => {
  const { gameState } = useGameContext();
  const { turn } = gameState;

  console.log(gameState);

  return (
    <div className={styles.environment}>
      <div>Environment</div>
      <div>Turn: {turn + 1}</div>
      {Object.keys(LOCATION).map((key) => {
        return <Location key={key} name={key} />;
      })}
    </div>
  );
};

export default Environment;
