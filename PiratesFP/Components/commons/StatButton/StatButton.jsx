// React imports :

import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";

// Context :
import {
  playerContext,
  apiAddressContext,
  setPlayerContext,
  playerSelectionContext,
} from "../ApiProvider/ApiProvider";

const StatButton = (props) => {

  const [disabled, setDisabled] = useState(false);
  
  const apiAddress = useContext(apiAddressContext);
  const player = useContext(playerContext);
  const setPlayer = useContext(setPlayerContext);
  const playerSelection = useContext(playerSelectionContext);
  
  const action = props.action;
  const statValue = props.statValue;
  const index = props.index;
  const playerId = playerSelection;
  
  const handlePlusPress = () => {
    let newValue = statValue + 1;
    player.comp[index].stat = newValue;
    setPlayer({
      ...player
    });
    updatePlayer(player);
  };

  const handleMinusPress = () => {
    let newValue = statValue - 1;
    player.comp[index].stat = newValue;
    setPlayer({
      ...player
    });
    console.log(player);
    updatePlayer(player);
  };

  useEffect(() => {}, []);

  const updatePlayer = async (player) => {
    const address = apiAddress + playerSelection;
    const resquestOption = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    };
    const response = await fetch(address, resquestOption);
    const json = await response.text();
    console.log(json)
  };


  return (
    <View>
      <Button
        title={action}
        color="#0d1021"
        onPress={action == "+" ? handlePlusPress : handleMinusPress}
        disabled={disabled}
      />
    </View>
  );
};

export default StatButton;
