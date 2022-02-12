import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React, { useContext, useState } from "react";

// React Native Paper
import { TextInput } from "react-native-paper";

// Context :
import {
  playerContext,
  setPlayerContext,
  updatePlayerContext,
} from "../commons/ApiProvider/ApiProvider";

const NewWound = (props) => {
  // Context variables :

  const player = useContext(playerContext);
  const setPlayer = useContext(setPlayerContext);
  const updatePlayer = useContext(updatePlayerContext);

  // States :

  const [newWoundLocation, setNewWoundLocation] = useState("");
  const [newWoundPv, setNewWoundPv] = useState("");

  const handleNewWoundLocationChange = (newWoundLocation) => {
    setNewWoundLocation(newWoundLocation);
  };
  
  const handleNewWoundPvChange = (newWoundPv) => {
    let pv = parseInt(newWoundPv);
    if (Number.isInteger(pv)) {
      setNewWoundPv(newWoundPv);
    } else {
      alert("PV doit être un nombre !");
    }
  };

  const handlePress = () => {
    if(!newWoundLocation) {alert('Indiquez une localisation !')}
    else {
      let pv = parseInt(newWoundPv);
      let woundsUpdate = player.wounds;
      let newWound = { localisation: newWoundLocation, pv: pv };
      woundsUpdate.push(newWound);
      let hpUpdate = updateTotalPV();
      player.wounds = woundsUpdate
      player.hp = hpUpdate
      setPlayer({
        ...player,
      });
      updatePlayer(player);
      props.handleNewWoundExpanded;
      setNewWoundLocation("");
      setNewWoundPv("");
    }
  };

  const updateTotalPV = () => {
    let total = 0;
    player.wounds.map((item, index) => {
      total = total + item.pv;
    });
    let maxHP = player.hp.max;
    if (total > maxHP) {
      total = 0;
    } else {
      total = maxHP - total;
    }
    let hpUpdate = { current: total, max: maxHP };
    return hpUpdate;
  };

  return (
    <View>
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        Nouvelle blessure :
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Emplacement"
          style={{ flex: 2 }}
          activeOutlineColor="black"
          value={newWoundLocation}
          onChangeText={handleNewWoundLocationChange}
        />
        <TextInput
          mode="outlined"
          label="PV perdus"
          style={{ flex: 1 }}
          activeOutlineColor="black"
          value={newWoundPv}
          onChangeText={handleNewWoundPvChange}
          keyboardType='numeric'
        />
      </View>
      <Button title="Add" color={"grey"} onPress={handlePress} />
    </View>
  );
};

export default NewWound;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  plusIcon: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
