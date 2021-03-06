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

  const { initGameState, gameState, animateFishing } = useGameContext();

  useEffect(() => {
    if (!!gameID) {
      initGameState(gameID).then((res) => {});
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

  useEffect(() => {
    if (gameState?.isFishing) {
      animateFishing();
    }
  }, [gameState?.isFishing]);

  return (
    <div
      className={styles.game}
      style={{ height: dimensions.height, width: dimensions.width }}
    >
      {gameState?.players &&
        gameState.players.map((name) => {
          return <GamePlayerSection key={name} id={name} />;
        })}
      {gameState?.isFishing && (
        <div style={{ textAlign: "center" }}>--- FISHING ---</div>
      )}
      <Environment />
    </div>
  );
};

export default Game;
