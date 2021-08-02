import { useContext } from "react";
import GameContext from "../contexts/game";

const GamePlayerSection = () => {
  const { scale } = useContext(GameContext);
  console.log(GameContext);

  return <div>player {scale}</div>;
};

export default GamePlayerSection;
