import styles from "../../styles/Environment.module.css";
import GameContext from "../../contexts/gameContext";
import { LOCATION } from "../../../constants/constants";
import Location from "../Location/Location";

const Environment = () => {
  return (
    <div className={styles.environment}>
      <div>Environment</div>
      {Object.keys(LOCATION).map((key) => {
        return <Location key={key} name={key} />;
      })}
    </div>
  );
};

export default Environment;
