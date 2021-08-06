import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GamePlayerSection from "../../components/GamePlayerSection/GamePlayerSection";
import styles from "../../styles/Game.module.css";
import { useGameContext } from "../../contexts/gameContext";
import Environment from "../../components/Environment/Environment";

const Game = () => {
  const router = useRouter();
  const { gameID } = router.query;
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const [scale, setScale] = useState(1);

  const { initGameState, gameState } = useGameContext();

  useEffect(() => {
    if (!!gameID) {
      initGameState(gameID);
    }
  }, [gameID]);

  useEffect(() => {
    const onResize = () => {
      const min = Math.min(window.innerHeight, window.innerWidth * (9 / 16));
      setScale((min * (16 / 9)) / 1000);

      setDimensions({
        height: min,
        width: min * (16 / 9),
      });
    };

    window.addEventListener("resize", onResize);
    onResize();
  }, []);

  return (
    <div
      className={styles.game}
      style={{ height: dimensions.height, width: dimensions.width }}
    >
      {gameState?.players &&
        Object.keys(gameState.players).map((name) => {
          return <GamePlayerSection id={name} />;
        })}
      <Environment />
    </div>
  );
};

export default Game;
