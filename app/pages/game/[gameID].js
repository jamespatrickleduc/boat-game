import { useRouter } from "next/router";

const Game = () => {
  const router = useRouter();
  const { gameID } = router.query;
  return <div>{gameID}</div>;
};

export default Game;
