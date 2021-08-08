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
  const playerState = gameState?.["player." + playerID];
  console.log(playerState);

  const [ready, setReady] = useState(false);
  const [location, setLocation] = useState("RIVER");
  const [fish, setFish] = useState("TROUT");
  const [isFishing, setIsFishing] = useState(false);

  useEffect(() => {
    if (!playerID) return;
    initPlayerState(playerID).then((res) => {
      console.log("im the resolved promise!", res);

      const player = res["player." + playerID];
      console.log(player);
      setLocation(player.location);
      setFish(player.fish);
      setReady(player.ready);
    });
  }, [playerID]);

  const updatePlayer = () => {
    if (Object.keys(gameState).length === 0) return;
    let player = gameState["player." + playerID];
    player.ready = ready;
    player.location = location;
    player.fish = fish;

    client.service("games").patch("123", { ["player." + playerID]: player });
  };

  useEffect(() => {
    updatePlayer();
  }, [ready]);

  useEffect(() => {
    if (gameState?.isFishing) {
      console.log("were fishing!");
      setIsFishing(true);
      setReady(false);
    } else setIsFishing(false);
  }, [gameState?.isFishing]);

  return (
    <div style={{ margin: 20 }}>
      {!!playerState ? (
        <>
          <Card style={{ display: "inline-block", padding: 30, margin: 15 }}>
            <div>Name:{playerState.name} </div>
            <div>
              {Object.entries(LOCATION).map(([key, value], i) => {
                const disabled = (function () {
                  if (
                    value.requirements &&
                    !includesArray(playerState.equipment, value.requirements)
                  )
                    return true;
                  return false;
                })();

                return (
                  <Button
                    key={key + i}
                    style={{ margin: 10 }}
                    variant={key === location ? "contained" : "outlined"}
                    color="primary"
                    disabled={disabled}
                    onClick={() => {
                      if (location === key) return;
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
                  const disabled = (function () {
                    const f = FISH[key];
                    if (
                      f.requirements &&
                      !includesArray(playerState.equipment, f.requirements)
                    )
                      return true;

                    return false;
                  })();

                  return (
                    <Button
                      key={key + i}
                      style={{ margin: 10 }}
                      variant={key === fish ? "contained" : "outlined"}
                      color="primary"
                      disabled={disabled}
                      onClick={() => {
                        if (location === key) return;
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
                variant={ready ? "contained" : "outlined"}
                color="primary"
                style={{ width: 150 }}
                disabled={isFishing}
                onClick={() => {
                  setReady(!ready);
                }}
              >
                {ready ? "READY" : "NOT READY"}
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
                      key={key + i}
                      variant={owned ? "outlined" : "contained"}
                      disabled={owned}
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
