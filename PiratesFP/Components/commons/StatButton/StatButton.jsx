// React imports :

import React, { useContext, useState } from "react";
import { Text, View, Button, FlatList } from "react-native";

// Context :
import { playerContext, apiAddressContext} from "../ApiProvider/ApiProvider";

const StatButton = (props) => {
  let apiAddress = useContext(apiAddressContext)
  const [player, setPlayer] = useState(useContext(playerContext));

  const statName = props.statName;
  const statValue = props.statValue;
  const action = props.action;
  const index = props.index;
  const playerId = player.id

  const handlePlusPress = () => {
    let newValue = statValue + 1;
    let playerErase = player
    playerErase.comp[index].stat = newValue 
    setPlayer(playerErase);
    updatePlayer(playerErase)
  };

  const updatePlayer = async (playerErase) => {
    apiAddress = apiAddress + playerId
    const resquestOption = {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(playerErase)
    }
    const response = await fetch(apiAddress, resquestOption)
    const json = await response.json()
    setPlayer(json)
  }

  const handleMinusPress = () => {};

  return (
    <View>
      <Button
        title={props.action}
        color="#0d1021"
        onPress={action == "+" ? handlePlusPress : handleMinusPress}
      />
    </View>
  );
};

export default StatButton;
