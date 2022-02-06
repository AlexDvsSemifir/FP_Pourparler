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
  
  const handlePress = () => {
    let newValue = ""
    if (action == "+") {newValue = statValue + 1;}
    else if (action == " - ") {newValue = statValue - 1;}
    if (newValue < 20) {
      newValue = 20
      alert('La stat ne peut être inférieure à 20 !')
    }
    else {
      player.comp[index].stat = newValue;
      setPlayer({
        ...player
      });
      updatePlayer(player);
    }
  };

  useEffect(() => {}, []);

  const updatePlayer = async (player) => {
    try {
      const address = apiAddress + playerSelection;
      const resquestOption = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      };
      const response = await fetch(address, resquestOption);
      const json = await response.text();
      console.log(json)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View>
      <Button
        title={action}
        color="#0d1021"
        onPress={handlePress}
        disabled={disabled}
      />
    </View>
  );
};

export default StatButton;
