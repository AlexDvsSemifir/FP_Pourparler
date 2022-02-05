// React imports :

import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";

// Context :
import {
  playerContext,
  apiAddressContext,
  setPlayerContext,
} from "../ApiProvider/ApiProvider";

const StatButton = (props) => {
  let apiAddress = useContext(apiAddressContext);
  const player = useContext(playerContext);
  const setPlayer = useContext(setPlayerContext);

  const action = props.action;
  const statValue = props.statValue;
  const index = props.index;

  const handlePlusPress = () => {
    let newValue = statValue + 1;
    player.comp[index].stat = newValue;
    setPlayer({
      ...player,
      player,
    });
    console.log(player);
    updatePlayer(player);
  };

  const handleMinusPress = () => {
    let newValue = statValue - 1;
    player.comp[index].stat = newValue;
    setPlayer({
      ...player,
      player,
    });
    console.log(player);
    updatePlayer(player);
  };

  useEffect(() => {}, []);

  const updatePlayer = async (player) => {
    const playerId = player.id;
    apiAddress = apiAddress + playerId;
    const resquestOption = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    };
    const response = await fetch(apiAddress, resquestOption);
    const json = await response.json();
  };


  return (
    <View>
      <Button
        title={action}
        color="#0d1021"
        onPress={action == "+" ? handlePlusPress : handleMinusPress}
      />
    </View>
  );
};

export default StatButton;
