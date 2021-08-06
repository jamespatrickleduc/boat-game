import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts/gameContext";
import client from "../../feathersClient";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { includesArray } from "../../util/helpers";

import { LOCATION, FISH, EQUIPMENT } from "../../../constants/constants";

const Player = () => {
  const router = useRouter();
  const { playerID } = router.query;

  const { gameState, initPlayerState, buyEquipment } = useGameContext();
  const playerState = gameState?.players?.[playerID];

  const [ready, setReady] = useState(false);
  const [location, setLocation] = useState("RIVER");
  const [fish, setFish] = useState("TROUT");

  useEffect(() => {
    if (!playerID) return;
    console.log(playerState);
    initPlayerState(playerID);
  }, [playerID]);

  useEffect(() => {
    if (Object.keys(gameState).length === 0) return;
    console.log(gameState);
    let players = Object.assign({}, gameState.players);
    players[playerID].ready = ready;
    players[playerID].equipment = gameState.players[playerID].equipment;

    client
      .service("games")
      .patch("123", { players })
      .then((res) => {
        console.log(playerState);
      });
  }, [ready]);

  return (
    <div style={{ margin: 20 }}>
      {!!playerState ? (
        <>
          <Card style={{ display: "inline-block", padding: 30, margin: 15 }}>
            <div>Name:{playerState.name} </div>
            <div>
              {Object.entries(LOCATION).map(([key, value], i) => {
                const variant = (function () {
                  if (
                    value.requirements &&
                    !includesArray(playerState.equipment, value.requirements)
                  )
                    return "disabled";
                  return key === location ? "contained" : "outlined";
                })();

                return (
                  <Button
                    key={i}
                    style={{ margin: 10 }}
                    variant={variant}
                    color="primary"
                    onClick={() => {
                      setLocation(key);
                      setFish(null);
                      setReady(false);
                    }}
                  >
                    {value.name}
                  </Button>
                );
              })}
            </div>
            <div>
              {Object.entries(LOCATION[location].fish).map(
                ([key, value], i) => {
                  const variant = (function () {
                    const f = FISH[key];
                    if (
                      f.requirements &&
                      !includesArray(playerState.equipment, f.requirements)
                    )
                      return "disabled";
                    return key === fish ? "contained" : "outlined";
                  })();

                  return (
                    <Button
                      key={i}
                      style={{ margin: 10 }}
                      variant={variant}
                      color="primary"
                      onClick={() => {
                        setFish(key);
                        setReady(false);
                      }}
                    >
                      {key}
                    </Button>
                  );
                }
              )}
            </div>
            <div>
              <Button
                variant={playerState.ready ? "contained" : "outlined"}
                color="primary"
                style={{ width: 150 }}
                onClick={() => {
                  setReady(!ready);
                }}
              >
                {playerState.ready ? "READY" : "NOT READY"}
              </Button>
            </div>
          </Card>
          <Card style={{ display: "inline-block", padding: 30 }}>
            <div>Gold:{playerState.gold}</div>
            <div>
              Buy Equipment
              {Object.entries(EQUIPMENT).map(([key, value], i) => {
                const owned = playerState.equipment.includes(key);
                const canAfford = !owned && playerState.gold >= value.cost;
                return (
                  <div style={{ margin: 10 }}>
                    <Button
                      variant={owned ? "disabled" : "contained"}
                      color={canAfford ? "primary" : "error"}
                      onClick={() => {
                        buyEquipment(playerID, key);
                      }}
                    >
                      {value.name} {value.cost}G
                    </Button>
                  </div>
                );
              })}
            </div>
          </Card>
        </>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default Player;
