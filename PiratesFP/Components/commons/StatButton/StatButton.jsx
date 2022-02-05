// React imports :

import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";

// Context :
import { playerContext, apiAddressContext, setPlayerContext} from "../ApiProvider/ApiProvider";

const StatButton = (props) => {
  
  let apiAddress = useContext(apiAddressContext)
  const player = useContext(playerContext)
  const setPlayer = useContext(setPlayerContext)

  const action = props.action;
  
  
  const handlePlusPress = () => {
    const statValue = props.statValue;
    const index = props.index;
    let newValue = statValue + 1;
    player.comp[index].stat = newValue 
    setPlayer(player)
    updatePlayer(player)
  };
  
  
  const updatePlayer = async (playerErase) => {
    const playerId = player.id
    apiAddress = apiAddress + playerId
    const resquestOption = {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(playerErase)
    }
    const response = await fetch(apiAddress, resquestOption)
    const json = await response.json()
  }

  const handleMinusPress = () => {};

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
