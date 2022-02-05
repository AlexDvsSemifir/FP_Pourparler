// React imports :

import React, { useContext, useState } from "react";
import { Text, View, Button, FlatList } from "react-native";

// Context :
import { playerContext } from "../ApiProvider/ApiProvider";

const StatButton = (props) => {
  const [player, setPlayer] = useState(useContext(playerContext));

  const statName = props.statName;
  const statValue = props.statValue;
  const action = props.action;
  const index = props.index;

  const handlePlusPress = () => {
    console.log(statName + ":" + statValue);
    console.log("L'index est : " + index )
  };

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
