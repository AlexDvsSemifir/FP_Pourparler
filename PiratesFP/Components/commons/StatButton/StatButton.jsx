// React imports :

import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";

// Context :
import {
  playerContext,
  setPlayerContext,
  refreshContext,
  updatePlayerContext
} from "../ApiProvider/ApiProvider";

const StatButton = (props) => {

  const [disabled, setDisabled] = useState(false);
  
  const player = useContext(playerContext);
  const setPlayer = useContext(setPlayerContext);
  const refresh = useContext(refreshContext)
  const updatePlayer= useContext(updatePlayerContext);

  
  const action = props.action;
  const statValue = props.statValue;
  const index = props.index;
  
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
      refresh
    }
  };

  useEffect(() => {}, []);


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
