import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GamePlayerSection from "../../components/GamePlayerSection";
import styles from "../../styles/Game.module.css";
import GameContext from "../../contexts/game";

const Game = () => {
  const router = useRouter();
  const { gameID } = router.query;

  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const [scale, setScale] = useState(1);

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

  console.log(`i am game ${gameID}`);

  return (
    <GameContext.Provider
      value={{
        scale,
      }}
    >
      <div
        className={styles.game}
        style={{ height: dimensions.height, width: dimensions.width }}
      >
        <GamePlayerSection />
      </div>
    </GameContext.Provider>
  );
};

export default Game;
