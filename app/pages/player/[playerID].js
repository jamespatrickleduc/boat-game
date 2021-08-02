import { useRouter } from "next/router";

const Player = () => {
  const router = useRouter();
  const { playerID } = router.query;
  return <div>{playerID}</div>;
};

export default Player;
